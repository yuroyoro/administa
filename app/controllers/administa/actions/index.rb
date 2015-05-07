module Administa
  module Actions
    module Index

      def index
        @result = index_result

        respond_to do |format|
          format.html
          format.json { render json: @result }
        end
      end

      protected
        def index_result
          options = parse_options
          relation = resources(options)

          resources = relation.limit(options[:limit]).offset(options[:offset])
          pagination = calculate_pagination(relation.count, options)

          result = {
            name:      self.class.model.name.underscore.pluralize,
            settings:  self.class.options,
            resources: resources.to_a,
            pagination: pagination,
          }

          result
        end


        def index_options
          self.class.options[:index]
        end

        def parse_options
          options = params.slice(:page, :limit, :order, :q)
          options = options.reverse_merge(
            page:  1,
            limit: index_options[:limit],
            order: index_options[:order],
          )

          page  = options[:page].try(:to_i)
          page  = 1 if page <= 0
          limit = options[:limit].try(:to_i)
          offset = (page == 1 ? 0 : limit * (page - 1))

          options.merge(
            page: page,
            limit: limit,
            offset: offset,
          )
        end

        def calculate_pagination(count , options)
          limit = options[:limit]
          {
            page:        options[:page],
            limit:       limit,
            offset:      options[:offset],
            count:       count,
            total_pages: limit.zero? ? 0 : (count.to_f / limit).ceil,
            q:           options[:q],
          }
        end

        def resources(options = {})
          order = options[:order]

          relation = model.order(order)

          if options[:q].present?
            relation = filter_by_keywords(relation, options[:q])
          end

          relation
        end

        def filter_by_keywords(relation, q)
          words = q.split(/\s/).map{ |w| "%#{w.gsub(/%/,  '%%')}%" }

          columns = model.column_names & index_options[:search_columns].map(&:to_s)

          arel = model.arel_table
          query = columns.map{|col|
            arel[col].matches_all(words)
          }.inject{|q1, q2| q1.or(q2) }

          query = query.or(arel[:id].eq(q.to_i)) if q =~ /^\d+$/

          relation.where(query)
        end
    end
  end
end
