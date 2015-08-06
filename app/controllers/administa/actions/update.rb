module Administa
  module Actions
    module Update

      def update

        includes = model.includes(:edit)
        resource = model.find(params[:id], includes)

        # TODO: strong parameters
        params.permit!

        attrs = params["resource"]

        model.assign(resource, attrs)
        unless resource.save!
          handle_validate_errors(resource.errors)
        end

        @result = show_result(params[:id])

        respond_to do |format|
          format.html { render :index }
          format.json { render json: @result }
        end
      rescue => e
        handle_exception(e)
      end

    end
  end
end
