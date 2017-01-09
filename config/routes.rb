Rails.application.routes.draw do
  root 'books#index'

  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :create, :destroy, :update]
    end
  end

  resources :books, only: :index
end
