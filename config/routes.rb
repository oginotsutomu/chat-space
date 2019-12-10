Rails.application.routes.draw do
  resource :message, only: [:index]
  root "messages#index"
end
