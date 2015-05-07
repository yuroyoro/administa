module Administa
  module Controller
    extend ActiveSupport::Concern

    included do
      include ::Administa::Actions::Index
      include ::Administa::Actions::Show
      include ::Administa::Actions::Edit
      include ::Administa::Actions::Update
      include ::Administa::ErrorHandlers

      layout 'administa/application'
      respond_to :html, :json

      class_attribute :model,   :instance_write => false
      class_attribute :options, :instance_write => false
    end

    module ClassMethods

      # Configure Administa options
      #
      #  model: (required)
      #
      #  index: {
      #    limit: 20,
      #    order: :id,
      #    columns: [:id, :name]
      #  }
      #
      def administa(model:,  **options)
        self.model = model
        self.options = default_settings(model).deep_merge(options)
      end

      def default_settings(model = self.model)
        columns = model.column_names
        show_columns = columns
        edit_columns = columns - %w(id created_at updated_at)
        {
          index: {
            limit: 20,
            order: :id,
            columns: columns.take(8),
            search_columns: [:name, :title],
          },
          show: {
            columns: show_columns,
          },
          edit: {
            columns: edit_columns,
          }
        }
      end
    end


  end
end
