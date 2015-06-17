require "administa/config/auth"
require "administa/config/menu"

module Administa
  class Config
    include ::Administa::Config::Auth
    include ::Administa::Config::Menu

    attr_accessor :controllers

    def models
      @models ||= self.controllers.to_a.inject({}){|h, controller|
        model = controller.model
        h[model.name.to_sym] = model
        h
      }
    end
  end
end
