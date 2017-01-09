Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
    namespace :api do
      namespace :v1 do
        resources :books, only: [:index, :create, :destroy, :update]
      end
    end
  end
end
