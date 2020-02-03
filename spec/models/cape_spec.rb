require 'rails_helper'

describe Cape do
  it { should have_many :reviews }

  it { should have_valid(:name).when("a name") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:fullName).when("a full name") }
  it { should_not have_valid(:fullName).when(nil, "") }

  it { should have_valid(:gender).when("a gender") }
  it { should_not have_valid(:gender).when(nil, "") }

  it { should have_valid(:affiliation).when("an affiliation") }
  it { should_not have_valid(:affiliation).when(nil, "") }

  it { should have_valid(:intelligence).when(50) }
  it { should_not have_valid(:intelligence).when(nil) }

  it { should have_valid(:strength).when(50) }
  it { should_not have_valid(:strength).when(nil) }

  it { should have_valid(:speed).when(50) }
  it { should_not have_valid(:speed).when(nil) }

  it { should have_valid(:url).when("a url string") }
  it { should_not have_valid(:url).when(nil, "") }
end
