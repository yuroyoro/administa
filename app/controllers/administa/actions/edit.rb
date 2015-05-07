module Administa
  module Actions
    module Edit

      def edit

        @result = index_result
        @result[:resource] = resource(params)

        respond_to do |format|
          format.html { render :index }
          format.json { render json: @result }
        end
      end

      protected
        def resource(options = {})
          model.find(options[:id])
        end
    end
  end
end
