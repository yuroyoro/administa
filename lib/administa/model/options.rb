module Administa
  class ConfigurationError < StandardError; end
  class Model
    module Options

      def settings
        translate(options)
      end

      def setup_options!(klass, options)

        options        = default_settings(klass).deep_merge(options)
        self.options = options

        default_cols   = default_colums(klass)
        global_cols    = options[:columns]
        global_ex_cols = options[:extra_columns]

        [:index, :show, :create, :edit].each do |action|
          columns = options.try(:[], action).try(:[], :columns)       || global_cols    || default_cols[action][:columns]
          extra   = options.try(:[], action).try(:[], :extra_columns) || global_ex_cols

          column_names = columns.to_a + extra.to_a

          options[action] ||= {}
          options[action][:columns] = column_names.map{|col|
            c = columns_meta(col) || associations_meta(col)
            unless c
              raise ConfigurationError, "Unknown column : #{c} in #{klass} : #{action}"
            end
            c
          }
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

      def default_settings(klass)
        {
          limit:          20,
          order:          :id,
          search_columns: [:name, :title],
          attr_accessible_role: :default,
        }
      end

      def default_colums(klass)
        columns = klass.column_names
        show_columns   = columns
        create_columns = columns - %w(id created_at updated_at)
        edit_columns   = columns - %w(created_at updated_at)

        {
          index: {
            columns: columns.take(8),
          },
          show: {
            columns: show_columns,
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
        return @columns_meta[name] if @columns_meta && @columns_meta[name]

        col = klass.columns_hash[name.to_s]
        return unless col

        assocs    = klass.reflect_on_all_associations
        uploaders = (klass.respond_to?(:uploaders) && klass.uploaders) || {}

        type = uploaders[col.name.to_sym].nil? ? col.type : :file # carrierwave?

        meta = {
          name: col.name,
          type: type,
          readonly: readonly?(col.name),
        }

        assocs.
          find{|a| a.macro == :belongs_to && a.foreign_key == col.name}.
          try{|a|
            # assoc_klass = Administa.config.klasss[a.name.to_s.singularize.to_sym]
            meta[:association] = create_association_meta(a)
          }

        @columns_meta ||= {}
        @columns_meta[name] = meta

        meta
      end

      def associations_meta(name)
        return @associations_meta[name] if @associations_meta && @associations_meta[name]

        a = klass.reflect_on_association(name)
        return nil unless a

        meta = create_association_meta(a)
        editable = [:select, :create, :update, :destroy].any?{|action| meta[action]}

        {
          name:       a.name,
          type:       a.macro,
          readonly:   (not editable),
          association: meta,
        }
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
          when :has_many, :through
            foreign_key = "#{assoc.name.to_s.singularize}_ids"
            selectable = (not readonly?(foreign_key))
        end

        {
          name:       assoc.name,
          type:       type,
          foreign_key: foreign_key,
          pluralized: assoc.name.to_s.pluralize,
          path:       assoc.class_name.to_s.underscore.pluralize,
          select:     selectable,
          create:     (editable && nested.present? && !nested[:update_only]),
          update:     (editable && nested.present?),
          destroy:    (nested.present? && !!nested[:allow_destroy]),
        }
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
        authorizer = klass.active_authorizer[role]
        return false unless authorizer

        authorizer.deny?(column)

      end

      def check_configuration(col)
        name = col[:name]
        association = col[:association]

        if col[:readonly]
          unless association && name != :id
            Rails.logger.debug "#{name} isn't specified in 'attr_accessible of' #{klass}. You should add #{name} if you want to edit"
            return
          end

          association_name = association[:name]
          attributes_name = "#{association_name.to_s.singularize}_attributes"
          readonly = readonly?(attributes_name)

          if readonly
            Rails.logger.debug "#{attributes_name} isn't specified in 'attr_accessible' of #{klass}. You should add #{attributes_name} if you want to edit #{name} association "
          end

          nested_options = klass.nested_attributes_options
          nested = nested_options[association_name]

          unless nested
            Rails.logger.debug "#{association_name} isn't specified in 'accepts_nested_attributes_for' of #{klass}. You should add #{attributes_name} if you want to edit #{name} association "
          end
        end
      end

      def translate(options)
        scope = "activerecord.attributes.#{self.name}"
        [:index, :show, :create, :edit].each do |action|
          columns = options.try(:[], action).try(:[], :columns)
          columns.each do |col|
            col[:label] = I18n.t(col[:name], scope: scope, default: col[:name].to_s)
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
    end
  end
end
