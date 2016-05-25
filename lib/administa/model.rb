require "administa/model/options"
require "administa/model/finder"
require "administa/model/relation"
require "administa/model/json"
require "administa/model/attributes"

module Administa
  class Model
    include Administa::Model::Options
    include Administa::Model::Finder
    include Administa::Model::Json
    include Administa::Model::Attributes

    attr_accessor :name, :controller, :klass, :options, :given_options
    def initialize(controller, klass, options = {})
      self.name       = klass.name.underscore
      self.controller = controller
      self.klass      = klass
      self.given_options = options

      Administa.config.add_model(self)
    end

    delegate :table_name, :column_names, :columns_hash, :arel_table, :to => :klass
  end
end
