class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :profile_pic

  has_many :links
end
