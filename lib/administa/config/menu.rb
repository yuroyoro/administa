module Administa
  class Config
    module Menu

      def menus(controller)

        f = ->(m) {
          case m[:type]
          when :menu
            lf = m.delete(:label_f)
            m[:label] = lf.call
            sf = m.delete(:selected_f)
            m[:selected] = sf.call(controller)
          when :group
            m[:label]  = f.call(m[:label].dup)
            m[:menus]  = m[:menus].map{|sm| f.call(sm.dup) }
            m[:opened] = m[:label][:selected] || m[:menus].any?{|sm| sm[:opend] || sm[:selected] }
          when :label
            lf = m.delete(:label_f)
            m[:label] = lf.call
          end

          m
        }

        @menu_tree.menus.map do |m|
          f.call(m.dup)
        end
      end

      def menu(&block)
        @menu_def = block
      end

      def run_menu_def
        @menu_tree  = Tree.new(&@menu_def)
        @menu_tree.run

        @controllers = @menu_tree.controllers
      end

      class Tree
        attr_accessor :menus, :controllers

        def initialize(&block)
          @menus      = []
          @controllers = []
          @block      = block
        end

        def run(current_controller = nil)
          @current_controller = current_controller
          self.instance_eval(&@block)
          self
        end

        def t(s, options = {})
          if s.is_a? Symbol
            s = I18n.t(s, scope: options[:scope], default: s)
          end
          return s
        end

        def label(s, options = {})
          @menus.push({
            type: :label,
            label_f: -> { t(s) },
          })
        end

        def label_group(title, options = {}, &block)
          t = label(title, options)
          add_group(t, options, &block)
        end

        def group(title, options = {}, &block)
          c = case title
              when String, Symbol then Administa.config.generate_controller(title.to_s, options)
              else title
          end

          t = controller(c, options)
          add_group(t, options, &block)
        end

        def add_group(title, options = {}, &block)
          m = Tree.new(&block)
          m.run

          @controllers += m.controllers.to_a
          children = m.menus
          opened=  children.any?{|h| h[:selected] || h[:opened]}

          @menus.push({
            type:   :group,
            label:  title,
            menus:  children,
            opened: opened,
          })
        end

        def menu(controller, options = {})
          c = case controller
              when String, Symbol then Administa.config.generate_controller(controller.to_s, options)
              else controller
          end

          @menus.push(controller(c))
        end

        private
        def controller(c, options= {})
          selected_f = ->(current){ current.try(:controller_path) == c.controller_path }
          label_f    = -> { c.model.label }
          @controllers.push(c)
          {
            type:       :menu,
            path:       "/#{c.controller_path}",
            label_f:    label_f,
            selected_f: selected_f,
          }
        end
      end
    end
  end
end
