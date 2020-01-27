require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:first_name) {|n| "John" }
    sequence(:last_name) {|n| "Smith" }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
