Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root 'books#index'

  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :create, :destroy, :update]
    end
  end

  resources :books, only: :index
end
