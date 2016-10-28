module Administa
  class Model
    module Finder
      def all
        rel = (Rails.version < "4.0") ?  klass.scoped : klass.all
        Administa::Model::Relation.new(self, rel)
      end

      def select(options = {})
        options = extract_options_for_query(options)
        all.select(options)
      end

      def find(id, options = {})
        options = extract_options_for_query(options)

        klass.includes(options[:includes]).find(id)
      end

     protected
        def extract_options_for_query(options = {})
          options = options.dup
          action = options.delete(:action)
          options[:includes] = options[:includes] || action.try{|act| self.includes(act) } || {}

          options
        end

    end
  end
end
