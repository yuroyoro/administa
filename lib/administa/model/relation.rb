require 'anbt-sql-formatter/formatter'

module Administa
  class Model
    class Relation
      include Administa::Model::Finder

      attr_accessor :klass, :relation, :pagination_metadata
      def initialize(klass, relation)
        self.klass = klass
        self.relation = relation
      end

      def to_a
        relation.to_a
      end

      def select(options = {})
        rel = relation.includes(options[:includes].map(&:to_sym)).references(options[:includes].map(&:to_sym))

        self.class.new(klass, rel)
      end

      def filter_by_keywords(keyword)
        return self unless keyword.present?

        words = keyword.split(/\s/).map{ |w| "%#{w.gsub(/%/,  '%%')}%" }

        map_alias = table_name_alias_name_map

        query= ( (klass.options[:append] || []) | [klass.name]) \
          .reject{|_| _.instance_of? Hash } \
          .map(&:to_s) \
          .map{ |t| append_to_arel(t, words, map_alias) } \
          .select{ |_| _.present? } \
          .inject{ |q1, q2| q1.or(q2) }

        if keyword =~ /^\d+$/
          if query.nil?
            query = klass.arel_table[:id].eq(keyword.to_i)
          else
            query = query.or(klass.arel_table[:id].eq(keyword.to_i))
          end
        end

        rel = relation.where(query)

        self.class.new(klass, rel)
      end

      def order(*args)
        o = args.compact.presence || klass.options[:order]

        unless o.to_s.include?(".")
          o = "%s.%s" % [ klass.table_name, o]
        end

        self.class.new(klass, relation.order(o))
      end

      def paginate(page: 1, limit: klass.options[:limit])
        page  ||= 1
        limit ||= klass.options[:limit]

        offset = (page <= 1 ? 0 : limit * (page - 1))

        count = relation.count
        rel = relation.limit(limit).offset(offset)

        result = self.class.new(klass, rel)
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

      private
        def target_cols(assoc_table)
          if assoc_table.to_s.pluralize == relation.table_name.pluralize
            cols = relation.columns.map(&:name)
          else
            cols = assoc_table_klass(assoc_table).columns.map(&:name) \
              || real_table_klass(assoc_table).columns.map(&:name)
          end

          cols & ( klass.options[:search_columns].map(&:to_s) || [] )
        end

        def real_table_klass(assoc_table)
          Administa.config.models[assoc_table.to_sym].klass
        end

        def assoc_table_klass(assoc_table)
          relation.reflections[assoc_table.to_s].klass
        end

        def append_to_arel(assoc_table, words, map_alias)
          arel_table = Arel::Table.new(access_table_name(assoc_table, map_alias))

          tc = target_cols(assoc_table)

          target_cols(assoc_table).flatten.
            map{|col|
              arel_table[col].matches_all(words)
            }.inject{|q1, q2| q1.or(q2) }
        end

        def table_name_alias_name_map
          join_dependency = relation.send(:construct_join_dependency)
          r = join_dependency.aliases

          m = {}.with_indifferent_access

          r.instance_variable_get(:@tables).map do |t|
            if relation.table_name == t.node.table_name
              m[relation.table_name.singularize] = t.node.table_name.to_sym
            elsif t.node.reflection.class == ActiveRecord::Reflection::ThroughReflection
              m[t.node.reflection.delegate_reflection.name]  = t.node.aliased_table_name.to_sym
            elsif t.node.reflection.class == ActiveRecord::Reflection::BelongsToReflection
              m[t.node.reflection.name] = t.node.aliased_table_name.to_sym
            end
          end

          m
        end

        def access_table_name(assoc_table, map_alias)
          return map_alias[assoc_table]
        end
    end
  end
end
