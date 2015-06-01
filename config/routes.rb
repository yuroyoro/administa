Administa::Engine.routes.draw do

  get :main, to: 'main#index'

  get    ':model',          to: 'generic#index'
  get    ':model/:id',      to: 'generic#show'
  get    ':model/new',      to: 'generic#new'
  post   ':model/create',   to: 'generic#new'
  get    ':model/:id/edit', to: 'generic#edit'
  put    ':model/:id',      to: 'generic#update'
  delete ':model/:id',      to: 'generic#destroy'
end
