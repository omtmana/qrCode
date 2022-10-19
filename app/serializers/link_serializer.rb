class LinkSerializer < ActiveModel::Serializer
  attributes :id, :link_url, :link_title, :user_id

  # belongs_to :user
end
