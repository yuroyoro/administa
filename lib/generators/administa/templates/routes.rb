Rails.application.routes.draw do

  namespace :<%= options[:namespace} %> do
  end

  mount Administa::Engine => "/administa"
end
