module Administa
  class ConfigurationError < StandardError; end
  class Model
    module Options

      def settings
        translate(options).merge(
          locale:          I18n.locale,
          timezone:        Administa.config.timezone,
          timezone_offset: Administa.config.timezone_offset,
        )
      end

      def setup_options!(klass = self.klass, options = self.given_options)

        options = default_settings(klass).deep_merge(options)
        self.options = options

        default_cols   = default_colums(klass)
        global_cols    = Array.wrap(options[:columns])
        global_append_cols = Array.wrap(options[:append])
        global_except_cols = Array.wrap(options[:except])

        # TODO Refactoring
        [:index, :show, :create, :edit].each do |action|
          options[action] ||= {}
          options[action][:columns] = parse_actions_columns_option(action, options, global_cols, global_append_cols, global_except_cols, default_cols)
        end

        [:create, :edit].flat_map{|act| options[act][:columns] }.uniq.each do |col|
          if col[:name].in?([:id, :created_at, :updated_at])
            col[:readonly] = true
          end

          check_configuration(col)
        end

        @columns_meta = nil
        @associations_meta = nil
        options
      end

      def parse_actions_columns_option(action, options, global_cols, global_append_cols, global_except_cols, default_cols)
        actions_option = options.try(:[], action) || {}

        cols   = Array.wrap(actions_option[:columns]).presence ||
                 global_cols.presence ||
                 default_cols[action][:columns]

        append = (Array.wrap(actions_option[:append]).presence ||
                  global_append_cols).to_a

        except = (Array.wrap(actions_option[:except]) +
                  global_except_cols.to_a).map(&:to_sym)

        result = (cols + append ).reject{|col|
          name = (col.is_a? Hash) ? col[:name] : col.to_sym
          except.include? name
        }.map{|col|
          parse_column_option(col, action)
        }

        compact_columns(result)
      end

      def compact_columns(columns)
        result = columns.inject([]){|arr, col|
          other = arr.find{|c| c[:name] == col[:name] }
          if other
            other.merge!(col)
          else
            arr.push(col.dup)
          end

          arr
        }

        [:created_at, :updated_at].each do |attr|
          idx = result.find_index{|col| col[:name] == attr}
          if idx && idx >= 0 && c = result.delete_at(idx)
            result.push(c)
          end
        end
        result
      end

      def parse_column_option(col, action)
        name = case col
               when String, Symbol then col.to_sym
               when Hash           then col[:name].try(:to_sym)
               end

        unless name
          raise ConfigurationError, "given no column name: #{col.inspect} in #{klass} : #{action}"
        end

        c = columns_meta(name) || associations_meta(name) || accessor_meta(name)
        if col.is_a? Hash
          c = (c || {}).merge(col)
          c[:accessor] ||= :method

          raise ConfigurationError, "column type is required: #{col.inspect} in #{klass} : #{action}" unless c[:type]
        end

        unless c
          raise ConfigurationError, "Unknown column : #{col} in #{klass} : #{action}"
        end
        c
      end

      def default_settings(klass)
        {
          limit:                20,
          order:                :id,
          search_columns:       [:name, :title],
          attr_accessible_role: :default,
          actions:              Administa.config.actions,
        }
      end

      def default_colums(klass)
        columns = klass.column_names.map(&:to_sym)
        nesteds = klass.nested_attributes_options.keys

        create_columns = (columns - %w(id created_at updated_at).map(&:to_sym) + nesteds).reject{|c| readonly?(c)}
        edit_columns   = (columns - %w(created_at updated_at).map(&:to_sym) + nesteds).reject{|c| readonly?(c)}

        {
          index: {
            columns: columns,
          },
          show: {
            columns: columns,
          },
          create: {
            columns: create_columns,
          },
          edit: {
            columns: edit_columns,
          }
        }
      end

      def columns_meta(name)
        return @columns_meta[name.to_sym] if @columns_meta && @columns_meta[name.to_sym]

        col = klass.columns_hash[name.to_s]
        return unless col

        assocs    = klass.reflect_on_all_associations
        uploaders = (klass.respond_to?(:uploaders) && klass.uploaders) || {}
        enums     = enumerized_attributes(klass).try(:[], col.name.to_sym)

        type = col.type
        type = :file if uploaders[col.name.to_sym]  # carrierwave?

        default = col.default
        if enums
          type = :enum
          default = enums.first  if default.nil? && !col.null
        end

        meta = {
          name:     col.name.to_sym,
          type:     type,
          readonly: readonly?(col.name),
          accessor: :column,
          nullable: col.null,
          default:  default,
        }
        meta[:enums] = enums if enums

        assocs.
          find{|a| a.macro == :belongs_to && a.foreign_key == col.name}.
          try{|a|
            # assoc_klass = Administa.config.klasss[a.name.to_s.singularize.to_sym]
            meta[:association] = create_association_meta(a)
          }

        @columns_meta ||= {}
        @columns_meta[name.to_sym] = meta

        meta
      end

      def associations_meta(name)
        return @associations_meta[name.to_sym] if @associations_meta && @associations_meta[name.to_sym]

        a = klass.reflect_on_association(name)
        return nil unless a

        meta = create_association_meta(a)
        editable = [:select, :create, :update, :destroy].any?{|action| meta[action]}

        res = {
          name:       (a.macro == :belongs_to) ? a.foreign_key.to_sym : a.name.to_sym,
          type:       a.macro,
          readonly:   (not editable),
          accessor:   :association,
          association: meta,
        }

        @associations_meta ||= {}
        @associations_meta[name.to_sym] = res
        res
      end

      def create_association_meta(assoc)
        nested_options = klass.nested_attributes_options
        nested         = nested_options[assoc.name]
        type           = assoc.macro
        foreign_key    = assoc.foreign_key

        attributes_name = "#{assoc.name}_attributes"
        editable = (not readonly?(attributes_name))

        if type == :has_many && assoc.options[:through]
          type = :through
        end

        selectable = false
        case type
          when :belongs_to
            selectable = (not readonly?(assoc.foreign_key))
          when :has_many
            foreign_key = "#{assoc.name.to_s.singularize}_ids"
            selectable = (not readonly?(foreign_key))
          when :through
            foreign_key = "#{assoc.name.to_s.singularize}_ids"
            selectable = (not readonly?(foreign_key))
        end

        assoc_model_name = assoc.class_name.to_s.underscore
        res = {
          name:       assoc.name,
          type:       type,
          foreign_key: foreign_key,
          pluralized: assoc.name.to_s.pluralize,
          path:       assoc_model_name.pluralize,
          select:     selectable,
          create:     (editable && nested.present? && !nested[:update_only]),
          update:     (editable && nested.present?),
          destroy:    (nested.present? && !!nested[:allow_destroy]),
        }

        if model = Administa.config.models[assoc_model_name.to_sym]
          res[:controller_path] = model.controller.controller_path
        end

        res
      end

      def accessor_meta(name)
        return @accessor_meta[name.to_sym] if @accessor_meta && @accessor_meta[name.to_sym]

        reader = klass.instance_method(name) rescue nil
        writer = klass.instance_method("#{name}=") rescue nil

        return nil unless reader

        meta = {
          name:     name.to_sym,
          type:     :string,
          readonly: writer.nil?,
          accessor: :accessor,
        }

        meta
      end

      def includes(action)
        options[action].
          try(:[], :columns).
          map{|meta| meta[:association].try(:[], :name) }.
          compact
      end

      def associations
        reflections = klass.reflections
        options[:associations].inject({}){|h, (macro, names)|
          h[macro] = names.map{|name| reflections[name] }
          h
        }
      end

      def readonly?(column)
        role       = self.options[:attr_accessible_role] || :default
        authorizer = (klass.respond_to? :active_authorizer) ? klass.try(:active_authorizer).try(:[], role) : nil
        return false unless authorizer

        authorizer.deny?(column)

      end

      def check_configuration(col)
        name = col[:name]
        association = col[:association]

        if col[:readonly]
          unless association
            Rails.logger.debug "[Administa] warning: #{name} isn't specified in 'attr_accessible' of #{klass}. You should add #{name} if you want to edit" unless name.to_sym.in? [:id, :created_at, :updated_at]
            return
          end

          association_name = association[:name]
          attributes_name = "#{association_name.to_s.singularize}_attributes"
          readonly = readonly?(attributes_name)

          if readonly
            Rails.logger.debug "[Administa] warning: #{attributes_name} isn't specified in 'attr_accessible' of #{klass}. You should add #{attributes_name} if you want to edit #{name} association "
            return
          end

          nested_options = klass.nested_attributes_options
          nested = nested_options[association_name]

          unless nested
            Rails.logger.debug "[Administa] warning: #{association_name} isn't specified in 'accepts_nested_attributes_for' of #{klass}. You should add #{attributes_name} if you want to edit #{name} association "
          end
        end
      end

      def translate(options)
        scope = "activerecord.attributes.#{self.name}"
        [:index, :show, :create, :edit].each do |action|
          columns = options.try(:[], action).try(:[], :columns)
          columns.each do |col|
            i18n_scope = col[:i18n_scope] || scope
            col[:label] = I18n.t(col[:name], scope: i18n_scope, default: col[:name].to_s)
            if col[:association]
              col[:association][:label] = I18n.t(col[:association][:label], scope: scope, default: col[:association][:name].to_s)
            end
          end
        end

        options[:label]= self.label
        options
      end

      def label
        I18n.t(self.name, scope: 'activerecord.models', default: self.name.to_s)
      end

      def enumerized_attributes(klass)
        return nil unless klass.respond_to? :enumerized_attributes
        klass.enumerized_attributes.
          try(:attributes).
          inject({}){|h, (k, attr)|
            h[k.to_sym] = attr.values.try(:map,  &:to_sym); h
          }
      end

    end
  end
end
