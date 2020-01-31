require 'rails_helper'

describe Review do
  it { should belong_to :user }
  it { should belong_to :cape }

  it { should have_valid(:rating).when(8) }
  it { should_not have_valid(:rating).when(nil, 0, 12) }

  it { should have_valid(:body).when("a body longer than ten characters") }
  it { should_not have_valid(:body).when(nil, "", "ok") }
end
