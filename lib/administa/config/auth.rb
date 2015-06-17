require 'digest/md5'

module Administa
  class Config
    module Auth

      DEFAULT_CURRENT_USER = Proc.new{
        request.env["warden"].try(:user) || respond_to?(:current_user) && current_user
      }
      DEFAULT_AUTHENTICATION = Proc.new{
        request.env['warden'].try(:authenticate!)
      }

      DEFAULT_USER_ICON_PROC = Proc.new {|user|
        Administa.config.user_email_proc.call(user).try{|email|
          hash = Digest::MD5.hexdigest(email)
          "http://www.gravatar.com/avatar/#{hash}.png"
        }
      }
      DEFAULT_USER_NAME_PROC = Proc.new{|user|
        (user.respond_to?(:name) && user.send(:name)) ||
        Administa.config.user_email_proc.call(user) ||
        nil
      }
      DEFAULT_USER_EMAIL_PROC = Proc.new{|user|
        (user.respond_to?(:email) && user.send(:email)) ||
        (user.respond_to?(:mail_adress) && user.send(:mail_adress)) ||
        nil
      }

      def current_user_method(&block)
        @current_user_proc = block if block
        @current_user_proc || DEFAULT_CURRENT_USER
      end

      def user_icon_image_proc(&block)
        @user_icon_proc = block if block
        @user_icon_proc || DEFAULT_USER_ICON_PROC
      end

      def user_name_proc(&block)
        @user_name_proc = block if block
        @user_name_proc || DEFAULT_USER_NAME_PROC
      end

      def user_email_proc(&block)
        @user_email_proc = block if block
        @user_email_proc || DEFAULT_USER_EMAIL_PROC
      end

      def authenticate_with(&block)
        @authenticate = block if block
        @authenticate || DEFAULT_AUTHENTICATION
      end
    end
  end
end
