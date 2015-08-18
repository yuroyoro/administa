module Administa
  module Actions
    module New

      def new

        @result = index_result

        resource = model.klass.new

        @result[:id]       =  nil
        @result[:resource] =  model.as_json(resource, action: :create)

        respond_to do |format|
          format.html { render :index }
          format.json { render json: @result }
        end
      end

    end
  end
end
