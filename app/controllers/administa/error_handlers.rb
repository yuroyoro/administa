
module Administa
  module ErrorHandlers

    def handle_exception(exception, status = 400)
      case exception
        when ActiveRecord::RecordInvalid
          handle_validate_errors(exception.record.errors)
          return
        when ActiveRecord::RecordNotFound
          render :nothing => true, :status => 404
          return
        when ActiveRecord::PreparedStatementInvalid
          render :nothing => true, :status => 400
          return
        else
          raise exception
          return
      end
    end

    def handle_validate_errors(*errors)
      errors = errors.as_json
      errors = errors.first if errors.is_a? Array
      errors[self.model..name.underscore] = I18n.t(:invalid, :scope => "errors.messages") if errors.blank?

      respond_to do |format|
         format.json { render :json => {:errors => errors}.as_json, :status => 422 }
         format.any  { render :nothing => true, :status => 406 }
      end

    end
  end
end
