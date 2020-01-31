Rails.application.routes.draw do
  root 'static_pages#index'
  get '/superheroes', to: "static_pages#index"
  get '/', to: "static_pages#index"
  get '/new', to: "static_pages#index"
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :capes, only: [:index, :create, :show] do
        resources :reviews, only: [:show]
      end
    end
  end
end
