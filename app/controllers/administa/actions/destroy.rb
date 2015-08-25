module Administa
  module Actions
    module Destroy

      def destroy

        resource = model.find(params[:id], action: :edit)

        unless resource.destroy
          handle_validate_errors(resource.errors)
        end

        @result = index_result
        @result["flash"] = I18n.t("administa.flash.deleted", name: model.label, id: resource.id )

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
