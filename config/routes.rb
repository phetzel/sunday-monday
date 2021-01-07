Rails.application.routes.draw do
   root "static_pages#root"

   namespace :api, defaults: { format: :json } do 
      resources :appearances, only: [:create, :destroy]
      resources :artists, only: [:index, :show, :create, :update, :destroy]
      resources :emails, only: [:create, :destroy]
      resources :events, only: [:index, :show, :create, :update, :destroy]
      resources :releases, only: [:index, :show, :create, :update, :destroy]
      resources :features, only: [:create, :destroy]
      resources :painters, only: [:create, :destroy]
      resources :performs, only: [:create, :destroy]
      resource :session, only: [:create, :destroy, :show]
      resources :users, only: [:create, :show]
      resources :videos, only: [:index, :show, :create, :update, :destroy]
      resources :visuals, only: [:index, :show, :create, :update, :destroy]
   end
end
