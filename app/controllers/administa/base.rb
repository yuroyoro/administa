module Administa
  module Base
    extend ActiveSupport::Concern

    included do
      layout 'administa/application'

      if Rails.version < "4.0"
        before_filter :_authenticate!
      else
        before_action :_authenticate!
      end
      helper_method :user_info, :to_json
    end

    private

    def _authenticate!
      instance_eval(&Administa.config.authenticate_with)
    end

    def _current_user
      instance_eval(&Administa.config.current_user_method)
    end

    def user_info
      user = _current_user
      {
        name:  Administa.config.user_name_proc.call(user),
        email: Administa.config.user_email_proc.call(user),
        icon:  Administa.config.user_icon_image_proc.call(user),
      }
    end

    def to_json(obj)
      # change datetime format : FIXME race condition
      use_standard_json_time_format =  ActiveSupport::JSON::Encoding.use_standard_json_time_format
      ActiveSupport::JSON::Encoding.use_standard_json_time_format = false
      begin
        obj.to_json
      ensure
        ActiveSupport::JSON::Encoding.use_standard_json_time_format = !!use_standard_json_time_format
      end
    end
  end
end
