class CapeSerializer < ActiveModel::Serializer
  attributes :id, :name, :full_name, :gender, :affiliation, :intelligence, :strength, :speed, :url, :durability, :power, :combat, :reviews, :current_user

  belongs_to :user
  has_many :reviews

  def current_user
    object.user == scope
  end
end
