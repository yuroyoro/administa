
module Administa
  class Model
    module Json
      def as_json(records, options ={})
        action = options[:action]
        raise ArgumentError, ":action is required" unless action

        inc = (options[:includes] || self.includes(action)).try{|xs| convert_for_json_include(xs) } || {}
        methods = options[:method] || self.options[action][:columns].select{|c| c[:accessor] == :method }.map{|c| c[:name]}

        opt = (inc.is_a? Hash) ? inc.merge(methods: methods) : { include: inc, methods: methods }

        # specialize each uploader's serializable_hash method to
        # contain 'content_type' in json expression hash
        file_columns = self.options[action][:columns].select{|c| c[:type] == :file}
        file_columns.each do |col|
          Array.wrap(records).each do |r|
            uploader = r.send(col[:name])
            specialize_serializable_hash(uploader)
          end
        end

        records.as_json(opt)
      end

      def specialize_serializable_hash(uploader)
        uploader.instance_eval do
          def serializable_hash(options = nil)
            json = super(options)
            json["content_type"] = self.content_type
            json["is_image"] = !!(self.content_type =~ /^image\//)
            json
          end
        end
      end

      def convert_for_json_include(includes, wrap_include = true)
        res = case includes
        when Array
          includes.map{|value| convert_for_json_include(value, false) }
        when Hash
          includes.inject({}){|h,(k,v)| h[k] = convert_for_json_include(v);h }
        else
          includes
        end
        wrap_include ? {:include => res} : res
      end
    end
  end
end
