Administa::Engine.routes.draw do

  get :main, to: 'main#index'

  get    ':model',          to: 'generic#index'
  get    ':model/new',      to: 'generic#new'
  post   ':model/create',   to: 'generic#create'
  get    ':model/:id/edit', to: 'generic#edit'
  put    ':model/:id',      to: 'generic#update'
  get    ':model/:id',      to: 'generic#show'
  delete ':model/:id',      to: 'generic#destroy'
end
