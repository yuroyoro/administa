module Administa
  module Actions
    module Edit

      def edit

        @result = index_result
        resource = model.find(params[:id], action: :edit)

        @result[:id]       =  resource.id
        @result[:resource] =  model.as_json(resource, action: :edit)

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
