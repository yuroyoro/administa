require "administa/config/auth"
require "administa/config/menu"

module Administa
  class Config
    include ::Administa::Config::Auth
    include ::Administa::Config::Menu

    def models
      @models ||= self.controllers.to_a.inject({}){|h, controller|
        model = controller.model
        h[model.name.to_sym] = model
        h
      }
    end

    def controllers
      # lazy loading
      run_menu_def unless menu_initialized

      @controllers
    end
  end
end
