class CodeSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :user_id
end
