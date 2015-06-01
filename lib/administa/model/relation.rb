module Administa
  class Model
    class Relation
      include Administa::Model::Finder

      attr_accessor :model, :relation, :pagination_metadata
      def initialize(model, relation)
        self.model = model
        self.relation = relation
      end

      def to_a
        relation.to_a
      end

      def select(options = {})
        rel = relation.includes(options[:includes])

        self.class.new(model, rel)
      end

      def filter_by_keywords(keyword)
        return self unless keyword.present?

        words = keyword.split(/\s/).map{ |w| "%#{w.gsub(/%/,  '%%')}%" }

        columns = model.column_names & model.options[:search_columns].map(&:to_s)

        arel = model.arel_table
        query = columns.map{|col|
          arel[col].matches_all(words)
        }.inject{|q1, q2| q1.or(q2) }

        query = query.or(arel[:id].eq(keyword.to_i)) if keyword =~ /^\d+$/

        rel = relation.where(query)
        self.class.new(model, rel)
      end

      def order(*args)
        o = args.compact.presence || model.options[:order]

        self.class.new(model, relation.order(o))
      end

      def paginate(page: 1, limit: model.options[:limit])
        page  ||= 1
        limit ||= model.options[:limit]

        offset = (page == 1 ? 0 : limit * (page - 1))

        count = relation.count
        rel = relation.limit(limit).offset(offset)

        result = self.class.new(model, rel)
        result.calculate_pagination_metadata(count, page, limit, offset)
        result
      end

      protected
        def calculate_pagination_metadata(count , page, limit, offset)
          self.pagination_metadata = {
            page:        page,
            limit:       limit,
            offset:      offset,
            count:       count,
            total_pages: limit.zero? ? 0 : (count.to_f / limit).ceil,
          }
        end

    end
  end
end
