require "administa/model/options"
require "administa/model/finder"
require "administa/model/relation"
require "administa/model/json"

module Administa
  class Model
    include Administa::Model::Options
    include Administa::Model::Finder
    include Administa::Model::Json

    attr_accessor :name, :controller, :model, :options
    def initialize(controller, model, options = {})
      self.name       = model.name.underscore
      self.controller = controller
      self.model      = model
      self.options    = setup_options(model, options)
    end

    delegate :column_names, :arel_table, :to => :model

  end
end
