module Administa
  class GenericController < ActionController::Base
    include Administa::Controller

    before_action :reject_except_json


    def model
      return @model if @model

      name = params[:model].try(:camelize).try(:singularize)
      if @model = Administa.config.modes[name]
        return @model
      end

      model = name.try(:safe_constantize)
      @model = Administa::Model.new(self, model, {})
      @model.setup_options!
      @model
    end

    def reject_except_json
      unless request.format == :json
       render :nothing => true, :status => 406
      end
    end

  end
end
