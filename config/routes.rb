Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   namespace :api, defaults: {format: :json} do
    resource :user, only: [:create] 
    resource :session, only: [:create, :destroy]
    resources :events, only:[:create,:destroy,:index,:show,:update]
    resources :tickets, only:[:create,:destroy,:index]
    resources :purchased_tickets,only:[:create,:destroy,:index]
    resources :collections, only:[:create,:destroy,:index]
  end
  root "static_pages#root"
end
