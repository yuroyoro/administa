
module Administa
  class Engine < ::Rails::Engine

    isolate_namespace Administa

    config.after_initialize do
      Administa.config.initialize!
    end
  end
end
