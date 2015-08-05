module Administa
  module Controller
    extend ActiveSupport::Concern

    included do
      include ::Administa::Actions::Index
      include ::Administa::Actions::Show
      include ::Administa::Actions::New
      include ::Administa::Actions::Create
      include ::Administa::Actions::Edit
      include ::Administa::Actions::Update
      include ::Administa::ErrorHandlers

      layout 'administa/application'
      respond_to :html, :json

      class_attribute :model, :instance_write => false

      if Rails.version < "4.0"
        before_filter :_authenticate!
      else
        before_action :_authenticate!
      end
      helper_method :user_info
    end

    module ClassMethods

      def administa(model:,  **options)
        self.model = Administa::Model.new(self, model, options)
      end
    end

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

  end
end
