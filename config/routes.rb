Rails.application.routes.draw do
   root "static_pages#root"

   namespace :api, defaults: { format: :json } do 
      resources :artists, only: [:index, :show, :create, :destroy]
      resources :items, only: [:index, :show, :create, :destroy]
      resources :events, only: [:index, :show, :create, :destroy]
      resources :releases, only: [:index, :show, :create, :destroy]
      resources :features, only: [:create, :destroy]
      resources :performs, only: [:create, :destroy]
      resource :session, only: [:create, :destroy, :show]
      resources :users, only: [:create, :show]
   end
end
