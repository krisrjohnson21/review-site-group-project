class Review < ApplicationRecord
  validates :rating, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }
  validates :body, presence: true, length: { minimum: 10 }
  
  belongs_to :user
  belongs_to :cape
end
