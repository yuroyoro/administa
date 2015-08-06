require "administa/config/auth"
require "administa/config/menu"
require "administa/config/dynamic_controller"

module Administa
  class Config
    include ::Administa::Config::Auth
    include ::Administa::Config::Menu
    include ::Administa::Config::DynamicController

    attr_reader :models, :controllers

    def initialize!
      run_menu_def
      initialize_models!
    end

    def initialize_models!
      @models.to_a.each do |_, m|
        m.setup_options!
      end
    end

    def add_model(model)
      @models ||= {}
      @models[model.name.to_sym] = model
    end

    def namespace(ns = nil)
      @namespace = ns if ns
      @namespace || :administa
    end

    def base_controller(base = nil)
      @base_controller = base if base
      @base_controller || "ApplicationController"
    end

  end
end
