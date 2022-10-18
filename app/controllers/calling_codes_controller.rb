class CallingCodesController < ApplicationController

   def index
      user = find_user
      if user
         render json: user.calling_codes
      else
         render json: {error: 'User Calling Code not found'}
      end
   end

   def show 
      calling_code = CallingCode.find_by(id: params[:id])
      if calling_code
         render json: calling_code
      else
         render json: {error: 'Calling code not found'}, status: :not_found
      end
   end

   def create
      calling_code = CallingCode.create!(calling_code_params)
      render json: calling_code
   end

   private

   def calling_code_params
      params.permit(:image, :name, :phone_num, :email, :other_info, :user_id)
   end

   def find_user
      User.find_by(id: session[:user_id])
   end
end
