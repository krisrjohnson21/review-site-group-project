class CapeSerializer < ActiveModel::Serializer
  attributes :id, :name, :full_name, :gender, :affiliation, :intelligence, :strength, :speed, :url
  
  belongs_to :user
  has_many :reviews
end
