Rails.application.routes.draw do
  root 'main#index'

  resources :main, only: :index

  namespace :api do
    namespace :v1 do
      jsonapi_resources :books
      jsonapi_resources :chapters
    end
  end

  match '*path' => redirect('/'), via: :get
end
