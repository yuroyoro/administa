module Administa
  class Model
    module Finder
      def all
        rel = (Rails.version < "4.0") ?  klass.scoped : klass.all
        Administa::Model::Relation.new(self, rel)
      end

      def select(options = {})
        all.select(options)
      end

      def find(id, includes = {})
        klass.includes(includes).find(id)
      end
    end
  end
end
