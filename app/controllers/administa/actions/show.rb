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

          includes = model.includes(:show)
          resource = model.find(id, includes)

          result[:id]       =  resource.id
          result[:resource] =  model.as_json(resource, includes:includes)
          result
        end


    end
  end
end
