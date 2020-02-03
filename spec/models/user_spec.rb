require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many :reviews }

  it { should have_valid(:first_name).when("Johnny") }
  it { should_not have_valid(:first_name).when(nil, "") }

  it { should have_valid(:last_name).when("Smith") }
  it { should_not have_valid(:last_name).when(nil, "") }

  it { should have_valid(:email).when("john@smith.com") }
  it { should_not have_valid(:email).when(nil, "") }

  describe "#admin?" do
  it "is not an admin if the role is not admin" do
    user = FactoryBot.create(:user, role: "member")
    expect(user.admin?).to eq(false)
  end

  it "is an admin if the role is admin" do
    user = FactoryBot.create(:user, role: "admin")
    expect(user.admin?).to eq(true)
  end
end
