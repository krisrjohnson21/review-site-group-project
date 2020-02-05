class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :user_id, :userFullName, :cape_id

  belongs_to :user
  belongs_to :cape

end
