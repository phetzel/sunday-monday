Rails.application.routes.draw do
   root "static_pages#root"

   namespace :api, defaults: { format: :json } do 
      resources :artists, only: [:index, :show, :create, :destroy]
      resources :items, only: [:index, :show, :create, :destroy]
      resources :releases, only: [:index, :show, :create, :destroy]
      resources :features, only: [:create, :destroy]
   end
end
