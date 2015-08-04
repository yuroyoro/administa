require "administa/config/auth"
require "administa/config/menu"

module Administa
  class Config
    include ::Administa::Config::Auth
    include ::Administa::Config::Menu

    attr_reader :models, :controllers

    def initialize!
      run_menu_def
      initialize_models!
    end

    def initialize_models!
      @models.each do |_, m|
        m.setup_options!
      end
    end

    def add_model(model)
      @models ||= {}
      @models[model.name.to_sym] = model
    end

  end
end
