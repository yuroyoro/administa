
module Administa
  class Engine < ::Rails::Engine

    isolate_namespace Administa

    config.after_initialize do
      if Rails.env.production?
        Administa.config.initialize!
      end
    end
  end
end
