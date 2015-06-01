module Administa
  class Model
    module Finder
      def all
        Administa::Model::Relation.new(self, model.all)
      end

      def select(options = {})
        all.select(options)
      end

      def find(id, includes = {})
        model.includes(includes).find(id)
      end

    end
  end
end
