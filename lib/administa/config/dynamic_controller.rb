
module Administa
  class Config
    module DynamicController

      attr_reader :dynamic_controllers

      def generate_controller(name)
        base      = Administa.config.base_controller
        namespace = Administa.config.namespace.to_s.camelize

        unless ns = namespace.safe_constantize
          ns = Module.new
          Object.const(namespace, nested_mod)
        end

        controller_name = "#{name.pluralize.camelize}Controller"
        return if "#{namespace}::#{controller_name}".safe_constantize

        base_klass = base.constantize
        klass      = Class.new(base_klass)
        model      = name.singularize.camelize.constantize

        ns.const_set(controller_name, klass)
        klass.send(:include, ::Administa::Controller)
        klass.class_eval do
          administa model: model
        end

        @dynamic_controllers ||= {}
        @dynamic_controllers[name.to_s.singularize.to_sym] = klass

        klass
      end


      def add_dynamic_controller_routes
        ns = self.namespace.to_sym
        dcs = self.controllers.map(&:model).map(&:name).map(&:pluralize).map(&:to_sym)

        Rails.application.routes.draw do
          namespace ns do
            dcs.each do |res|
              resources res
            end
          end
        end
      end
    end
  end
end

class Rails::Application::RoutesReloader

  def load_paths_with_dynamic_routes
    load_paths_without_dynamic_routes

    Administa.config.add_dynamic_controller_routes
  end
  alias_method_chain :load_paths, :dynamic_routes

end
