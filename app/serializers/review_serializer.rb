class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :user_id, :user_full_name

  belongs_to :user
  belongs_to :cape

  def user_full_name
    "#{object.user.first_name} #{object.user.last_name}"
  end
end
