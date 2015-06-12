module Administa
  class Model
    module Finder
      def all
        Administa::Model::Relation.new(self, klass.all)
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
