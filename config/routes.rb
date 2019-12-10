Rails.application.routes.draw do
  devise_for :users
  resource :message, only: [:index]
  root "messages#index"
  resources :users, only: [:edit, :update]
end
