require "administa/engine"
require "administa/config"
require "administa/model"

module Administa


  def self.config(&block)
    config = Administa::Config
    if block_given?
      yield config
    end

    config
  end

end
