Rails.application.routes.draw do
  # User.rb routes
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  
end
