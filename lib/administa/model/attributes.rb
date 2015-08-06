module Administa
  class Model
    module Attributes

      def assign(record, attrs)
        attrs = transform_attributes(attrs, klass)
        record.assign_attributes(attrs.except(:id, :updated_at, :created_at))
      end

      def transform_attributes(attr, klass = nil)
        role       = self.options[:attr_accessible_role] || :default
        authorizer = (klass.respond_to? :active_authorizer) ? klass.try(:active_authorizer).try(:[],  role) : nil
        white_list = (authorizer ? authorizer.to_a : klass.column_names).map(&:to_sym)
        white_list.unshift(:id)

        res = attr.slice(*white_list)
        remains = attr.except(*white_list)

        # accept if parameter name is "<association_name>_attributes"
        nested_attribute_names = klass.nested_attributes_options.keys
        attributes_keys = nested_attribute_names.map{|n| "#{n}_attributes"}
        remains.slice(*attributes_keys).each do |name, nested_attr|
          res[name] = nested_attr
        end
        remains.except!(*attributes_keys)

        # if parameter name is "<association_name>",
        # cordinate paramters by nested association recursively
        nested_attribute_keys = nested_attribute_names
        remains.slice(*nested_attribute_keys).each do |name, nested_attr|
          next unless nested_attr.present?
          nested_klass = klass_of(name) || klass_of(attr[name + '_type'])
          if nested_klass
            res["#{name}_attributes"] = case nested_attr
              when Array then nested_attr.map{|na| transform_attributes(na, nested_klass) }
              when Hash  then transform_attributes(nested_attr, nested_klass)
              else            nested_attr
            end
          end
        end
        remains.except!(*nested_attribute_keys)

        # if repsond_to? returuns true, set the paramster to record
        # accept "_destroy" for destory nested associations
        acceptable_names = ["id", "_destroy"]
        remains.except!(*association_names(klass))

        # reject common specific attributes(i.e create_at, updated_at)
        ignore_attrs = [:created_at, :updated_at].map(&:to_s)

        remains.except!(ignore_attrs)
        remains.reject!{|k,v| authorizer.deny?(k) && acceptable_names.include?(k) == false } if authorizer

        remains.each do |k,v|
          res[k] = v if klass.instance_methods.include?("#{k}=") || k == "_destroy"
        end

        res
      end

      def klass_of(name, klass = self.klass)
        name.to_s.singularize.camelize.constantize
      rescue NameError
        association = klass.reflect_on_all_associations.find{|a| a.plural_name == name.to_s && a.options.key?(:class_name) }

        association && association.options[:class_name].to_s.constantize
      end

      def association_names(klass = self.klass)
        klass.reflect_on_all_associations.map{|a| a.collection? ? a.plural_name.to_sym : a.name }
      end
    end
  end
end


