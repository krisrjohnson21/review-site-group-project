class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :reviews
  has_many :capes
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :role, presence: true

  mount_uploader :profile_photo, ProfilePhotoUploader

  def admin?
    role == "admin"
  end
end
