module Administa
  module Config
    class << self
      attr_accessor :controllers

      def models
        @models ||= self.controllers.to_a.inject({}){|h, controller|
          model = controller.model
          h[model.name.to_sym] = model
          h
        }
      end
    end
  end
end
