module Administa
  module Actions
    module Update

      def update

        record = resource(params)

        attrs = params["resource"]

        record.assign_attributes(attrs.except(:id, :updated_at, :created_at))
        record.save!

        @result = index_result
        @result[:resource] = record

        respond_to do |format|
          format.html { render :index }
          format.json { render json: @result }
        end
      rescue => e
        handle_exception(e)
      end

      protected
        def resource(options = {})
          model.find(options[:id])
        end
    end
  end
end
