
module Administa
  class Model
    module Json
      def as_json(records, options ={})
        inc = options[:includes].try{|xs| convert_for_json_include(xs) } || {}

        records.as_json(inc)
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
