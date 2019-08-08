Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: %i[create destroy]
    resources :events, only: %i[create destroy index show update]
    resources :tickets, only: %i[create destroy index]
    resources :purchased_tickets, only: %i[create destroy index]
    resources :collections, only: %i[create destroy index]
  end
  root 'static_pages#root'
end
