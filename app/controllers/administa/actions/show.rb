module Administa
  module Actions
    module Show

      def show

        @result = index_result

        includes = model.includes(:show)
        resource = model.find(params[:id], includes)

        @result[:id]       =  resource.id
        @result[:resource] =  model.as_json(resource, includes:includes)

        respond_to do |format|
          format.html { render :index }
          format.json { render json: @result }
        end
      end

    end
  end
end
