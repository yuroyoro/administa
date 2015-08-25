module Administa
  module Actions
    module Create

      def create

        resource = model.klass.new

        # TODO: strong parameters
        params.permit! if params.respond_to? :permit!

        attrs = params["resource"]

        model.assign(resource, attrs)
        unless resource.save!
          handle_validate_errors(resource.errors)
          return
        end

        @result = show_result(resource.id)
        @result["flash"] = I18n.t("administa.flash.created", name: model.label, id: resource.id )

        respond_to do |format|
          format.html { render :index }
          format.json { render json: to_json(@result) }
        end
      rescue => e
        handle_exception(e)
      end

    end
  end
end
