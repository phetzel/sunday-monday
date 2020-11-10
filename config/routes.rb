Rails.application.routes.draw do
   root "static_pages#root"

   namespace :api, defaults: { format: :json } do 
      resources :appearances, only: [:create, :destroy]
      resources :artists, only: [:index, :show, :create, :destroy]
      resources :items, only: [:index, :show, :create, :destroy]
      resources :events, only: [:index, :show, :create, :destroy]
      resources :releases, only: [:index, :show, :create, :destroy]
      resources :features, only: [:create, :destroy]
      resources :painters, only: [:create, :destroy]
      resources :performs, only: [:create, :destroy]
      resource :session, only: [:create, :destroy, :show]
      resources :users, only: [:create, :show]
      resources :videos, only: [:index, :show, :create, :destroy]
      resources :visuals, only: [:index, :show, :create, :destroy]
   end
end
