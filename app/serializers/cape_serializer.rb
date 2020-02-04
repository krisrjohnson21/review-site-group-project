class CapeSerializer < ActiveModel::Serializer
  attributes :id, :name, :fullName, :gender, :affiliation, :intelligence, :strength, :speed, :url, :reviews

  belongs_to :user
  has_many :reviews

  def fullName
    object.full_name
  end
end
