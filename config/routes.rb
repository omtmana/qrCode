Rails.application.routes.draw do
  get '/users', to: 'users#index'
  get '/me', to: 'users#show'       # staying logged in 
  # get '/auth', to: 'users#show'
  post '/signup', to: 'users#create'     # params : name, password, email, funds
  patch '/users', to: 'users#update'    # params : funds

  # # Login and Logout Routes - Sessions.rb
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
