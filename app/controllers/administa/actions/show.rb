module Administa
  module Actions
    module Show

      def show

        @result = show_result(params[:id])

        respond_to do |format|
          format.html { render :index }
          format.json { render json: @result }
        end
      end

      protected
        def show_result(id)
          result = index_result

          resource = model.find(id, action: :show)

          result[:id]       =  resource.id
          result[:resource] =  model.as_json(resource, action: :show)
          result
        end

    end
  end
end
