class CapeSerializer < ActiveModel::Serializer
  attributes :id, :name, :full_name, :gender, :affiliation, :intelligence, :strength, :speed, :url

  has_many :reviews
end
