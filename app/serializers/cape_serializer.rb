class CapeSerializer < ActiveModel::Serializer
  attributes :id, :name, :full_name, :gender, :affiliation, :intelligence, :strength, :speed, :url, :durability, :power, :combat, :reviews

  belongs_to :user
  has_many :reviews
end
