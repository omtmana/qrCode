class CodesController < ApplicationController
#      get '/codes', to: 'codes#index'

   def index
      user = find_user
      if user
         render json: user.codes
      else
         render json: {error: 'User Code not found'}
      end
   end

#   post '/codes', to: 'codes#create'
   def create
      code = Code.create(code_params)
      render json: code, status: 202
   end
   
#   delete '/codes/:id', to: 'codes#destroy'
  def destroy 
   user = find_user
   if user
    code = Code.find_by(id: params[:id])
    code.destroy
    head :no_content
   else
      render json: {error:'Error Delete'}
   end
  end

private

   def find_user
      User.find_by(id: session[:user_id])
   end

   def code_params
      params.permit(:title, :image, :user_id)
   end
end
