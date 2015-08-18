
module Administa
  class Model
    module Json
      def as_json(records, options ={})
        action = options[:action]
        raise ArgumentError, ":action is required" unless action

        inc = options[:includes].try{|xs| convert_for_json_include(xs) } || self.includes(action)
        methods = options[:method] || self.options[action][:columns].select{|c| c[:accessor] == :method }.map{|c| c[:name]}

        opt = (inc.is_a? Hash) ? inc.merge(methods: methods) : { include: inc, methods: methods }

        records.as_json(opt)
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
