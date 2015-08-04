
module Administa
  class Engine < ::Rails::Engine

    isolate_namespace Administa

    # initializer :add_administa_routes_path, before: :add_routing_paths do
      # puts ':add_administa_routes_path'
    # end

    config.after_initialize do
      puts 'after_initialize'
      Administa.config.initialize!
      # puts ':add_dynamic_controllers_routes'
    end
  end
end
