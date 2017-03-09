module Administa
  module Actions
    module Show

      def show

        @result = show_result(params[:id])

        respond_to do |format|
          format.html { render :index }
          format.json { render json: to_json(@result) }
        end
      rescue => e
        handle_exception(e)
      end

      protected
        def show_result(id)
          result = request.xhr? ? default_result :  index_result

          resource = model.find(id, action: :show)

          result[:id]       =  resource.id
          result[:resource] =  model.as_json(resource, action: :show)
          result
        end

    end
  end
end
