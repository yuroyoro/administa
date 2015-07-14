module Administa
  module Actions
    module New

      def new

        @result = index_result

        includes = model.includes(:edit)
        resource = model.klass.new

        @result[:id]       =  nil
        @result[:resource] =  model.as_json(resource, includes:includes)
        @result[:csrf_token] = form_authenticity_token

        respond_to do |format|
          format.html { render :index }
          format.json { render json: @result }
        end
      end

    end
  end
end
