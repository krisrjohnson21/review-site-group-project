class Cape < ApplicationRecord
  has_many :reviews

  validates :name, presence: true, uniqueness: true
  validates :full_name, presence: true
  validates :gender, presence: true
  validates :affiliation, presence: true
  validates :intelligence, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100}
  validates :strength, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100}
  validates :speed, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100}
  validates :url, presence: true
end
