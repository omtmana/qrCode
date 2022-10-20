class LinksController < ApplicationController
#    get '/links', to: 'links#index'

   def index
      user = find_user
      if user
         render json: user.links
      else
         render json: {error: 'User Link not found'}
      end
   end
#   get '/links/:id', to: 'links#show'
   def show
      link = Link.find_by(id: params[:id])
      if links
         render json: link, status: 202
      else
         render json: {error: 'Link not found'}
      end
   end

#   post '/links', to: 'links#create'
   def create
      link = Link.create(link_params)
      render json: link, status: :created
   end

   def destroy 
      user = find_user
      if user
      link = Link.find_by(id: params[:id])
      link.destroy
      head :no_content
      else
         render json: {error: 'Error Delete'}
      end 
  end

   private

   def find_user
      User.find_by(id: session[:user_id])
   end

   def link_params
      params.permit(:link_url, :link_title, :user_id)
   end
end
