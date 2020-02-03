require "rails_helper"
RSpec.describe Api::V1::CapesController, type: :controller do
  let!(:first_user) { User.create(
    first_name: "Bobby",
    last_name: "Wick",
    email: "bobby@example.com",
    password: "password",
    role: "member"
  )

  }
  let!(:first_cape) { Cape.create(
    user: first_user,
    name: "Trogdor",
    full_name: "Trogdor The Burninator",
    gender: "Dragon",
    affiliation: "StrongBad and StrongSad",
    intelligence: 95,
    strength: 75,
    speed: 80,
    url: "https://lh5.googleusercontent.com/proxy/X3_Io8z31Fim6hdOC47CIAOM4iBAAJQ5XKa9jw14gwbgqdVjA-lc-dzyxKdkqWsn52jtOIkFc8fIAMz67e7NfUfiKF7VR30uZ--sFoHxvG8tt1upS23ecWnZZ2Y"
  ) }
  let!(:second_cape) { Cape.create(
    user: first_user,
    name: "MechaBlart",
    full_name: "The Artist Formerly Known As Paul Blart",
    gender: "Robot",
    affiliation: "Burlington Mall",
    intelligence: 100,
    strength: 100,
    speed: 99,
    url: "https://vignette1.wikia.nocookie.net/es.futurama/images/1/19/Ulr.png/revision/latest?cb=20130123214147"
  ) }

  describe "GET#index" do
    it "should return the capes and their names" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["capes"].length).to be 2

      expect(returned_json["capes"][0].length).to be 12
      expect(returned_json["capes"][1].length).to be 12

      expect(returned_json["capes"][0]["name"]).to eq "Trogdor"
      expect(returned_json["capes"][0]["fullName"]).to eq "Trogdor The Burninator"
      expect(returned_json["capes"][0]["gender"]).to eq "Dragon"
      expect(returned_json["capes"][0]["affiliation"]).to eq "StrongBad and StrongSad"
      expect(returned_json["capes"][0]["intelligence"]).to eq 95
      expect(returned_json["capes"][0]["strength"]).to eq 75
      expect(returned_json["capes"][0]["speed"]).to eq 80
      expect(returned_json["capes"][0]["url"]).to eq "https://lh5.googleusercontent.com/proxy/X3_Io8z31Fim6hdOC47CIAOM4iBAAJQ5XKa9jw14gwbgqdVjA-lc-dzyxKdkqWsn52jtOIkFc8fIAMz67e7NfUfiKF7VR30uZ--sFoHxvG8tt1upS23ecWnZZ2Y"

      expect(returned_json["capes"][1]["name"]).to eq "MechaBlart"
      expect(returned_json["capes"][1]["fullName"]).to eq "The Artist Formerly Known As Paul Blart"
      expect(returned_json["capes"][1]["gender"]).to eq "Robot"
      expect(returned_json["capes"][1]["affiliation"]).to eq "Burlington Mall"
      expect(returned_json["capes"][1]["intelligence"]).to eq 100
      expect(returned_json["capes"][1]["strength"]).to eq 100
      expect(returned_json["capes"][1]["speed"]).to eq 99
      expect(returned_json["capes"][1]["url"]).to eq "https://vignette1.wikia.nocookie.net/es.futurama/images/1/19/Ulr.png/revision/latest?cb=20130123214147"
    end
  end

  describe "GET#show" do
    it "should return the cape and their attributes" do
      get :show, params: {id: first_cape.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["cape"]["name"]).to eq "Trogdor"
      expect(returned_json["cape"]["fullName"]).to eq "Trogdor The Burninator"
      expect(returned_json["cape"]["gender"]).to eq "Dragon"
      expect(returned_json["cape"]["affiliation"]).to eq "StrongBad and StrongSad"
      expect(returned_json["cape"]["intelligence"]).to eq 95
      expect(returned_json["cape"]["strength"]).to eq 75
      expect(returned_json["cape"]["speed"]).to eq 80
      expect(returned_json["cape"]["url"]).to eq "https://lh5.googleusercontent.com/proxy/X3_Io8z31Fim6hdOC47CIAOM4iBAAJQ5XKa9jw14gwbgqdVjA-lc-dzyxKdkqWsn52jtOIkFc8fIAMz67e7NfUfiKF7VR30uZ--sFoHxvG8tt1upS23ecWnZZ2Y"
    end
  end
end
