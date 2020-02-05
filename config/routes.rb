Rails.application.routes.draw do
  root 'static_pages#index'

  get '/superheroes', to: "static_pages#index"
  get '/superheroes/:id', to: "static_pages#index"
  get '/superheroes/:id/reviews', to: "static_pages#index"
  get '/', to: "static_pages#index"
  get '/new', to: "static_pages#index"

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :capes, only: [:index, :create, :show, :update] do
        resources :reviews, only: [:index, :show, :create]
      end
    end
  end
end
