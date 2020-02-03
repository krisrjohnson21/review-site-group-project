class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :user_id, :userFullName, :cape_id

  belongs_to :user
  belongs_to :cape

  def userFullName
    "#{object.user.first_name} #{object.user.last_name}"
  end
end
