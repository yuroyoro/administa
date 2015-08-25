require "administa/config/auth"
require "administa/config/menu"
require "administa/config/dynamic_controller"

module Administa
  class Config
    include ::Administa::Config::Auth
    include ::Administa::Config::Menu
    include ::Administa::Config::DynamicController

    attr_reader :models, :controllers, :timezone_obj

    def initialized?
      !!@initialized
    end

    # Initialization of Administa.config is delayed until
    # the first request incomming.
    #
    # see Administa::Base#_ensure_administa_config_initialized
    #
    def initialize!
      run_menu_def
      initialize_models!
      @initialized = true
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

    def timezone(tz = nil)
      @timezone = tz if tz
      @timezone ||= "Etc/UTC"
    end

    def timezone_offset
      timezone_obj = ActiveSupport::TimeZone.new(@timezone)
      ActiveSupport::TimeZone.seconds_to_utc_offset(timezone_obj.utc_offset)
    end

  end
end
