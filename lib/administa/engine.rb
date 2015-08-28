
module Administa
  class Engine < ::Rails::Engine

    isolate_namespace Administa

    config.after_initialize do
      if Rails.env.production? && (not Rails.groups.include?("assets"))
        Administa.config.initialize!
      end
    end
  end
end
