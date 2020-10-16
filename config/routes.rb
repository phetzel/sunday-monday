Rails.application.routes.draw do
   root "static_pages#root"

   namespace :api, defaults: { format: :json } do 
      resources :artists, only: [:index, :show, :create]
      resources :items, only: [:index, :show, :create]
   end
end
