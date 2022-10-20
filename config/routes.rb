Rails.application.routes.draw do
  get '/users', to: 'users#index'
  get '/me', to: 'users#show'       # staying logged in 
  # get '/auth', to: 'users#show'
  post '/signup', to: 'users#create'     # params : name, password, email, funds
  patch '/users', to: 'users#update'    # params : funds

  # # Login and Logout Routes - Sessions.rb
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # Links
  get '/links', to: 'links#index'
  get '/links/:id', to: 'links#show'
  post '/links', to: 'links#create'
  delete 'links/:id', to: 'links#destroy'

  #CallingCode
  get '/callingcodes', to: 'callingcodes#index'
  get '/callingcodes/:id', to: 'callingcodes#show'
  post '/callingcodes', to: 'callingcodes#create'

  #Codes.rb
  get '/codes', to: 'codes#index'
  post '/codes', to: 'codes#create'
  delete '/codes/:id', to: 'codes#destroy'
end
