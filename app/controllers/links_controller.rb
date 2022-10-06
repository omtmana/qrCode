class LinksController < ApplicationController
#    get '/links', to: 'links#index'

   def index
      render json: Links.all, status: 202
   end
#   get '/links/:id', to: 'links#show'
   def show
      link = Links.find_by(id: params[:id])
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

   private

   def link_params
      params.permit(:link_url, :link_title, :user_id)
   end
end
