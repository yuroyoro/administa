module Administa
  class Model
    module Options

      def setup_options(model, options)

        options = default_settings(model).deep_merge(options)

        [:index, :show, :edit].each do |action|
          column_names = options[action][:columns]
          options[action][:columns] = column_names.map{|col|
            columns_meta[col]
          }
        end
        options
      end

      def default_settings(model)
        columns = model.column_names
        show_columns = columns
        edit_columns = columns - %w(id created_at updated_at)

        {
          limit:          20,
          order:          :id,
          search_columns: [:name, :title],

          index: {
            columns: columns.take(8),
          },
          show: {
            columns: show_columns,
          },
          edit: {
            columns: edit_columns,
          }
        }
      end

      def columns_meta
        return @columns_meta if @columns_meta

        assocs = model.reflect_on_all_associations

        @columns_meta = model.columns.inject({}){|h, col|

          meta = {
            name: col.name,
            type: col.type,
          }

          assocs.
            find{|a| a.macro == :belongs_to && a.foreign_key == col.name}.
            try{|a|
              assoc_model = Administa.config.models[a.name.to_s.singularize.to_sym]
              meta[:association] =  {
                name: a.name,
                type: a.macro,
                pluralized: a.name.to_s.pluralize,
                path: assoc_model.try(&:controller).try(&:controller_path),
              }
            }

          h[col.name] = meta
          h
        }

      end

      def associations_meta
        return @associations_meta if @associations_meta

      end

      def includes(action)
        options[action].
          try(:[], :columns).
          map{|meta| meta[:association].try(:[], :name) }.
          compact
      end

      def associations
        reflections = model.reflections
        options[:associations].inject({}){|h, (macro, names)|
          h[macro] = names.map{|name| reflections[name] }
          h
        }
      end
    end
  end
end
