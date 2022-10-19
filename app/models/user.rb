class User < ApplicationRecord
   has_many :links
   has_many :codes
   has_many :calling_codes
   has_secure_password

   validates :email, presence: true, uniqueness: true
end
