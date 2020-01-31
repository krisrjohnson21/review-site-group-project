require "rails_helper"
RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:first_cape) { Cape.create(
    id: 1,
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
    id: 2,
    name: "MechaBlart",
    full_name: "The Artist Formerly Known As Paul Blart",
    gender: "Robot",
    affiliation: "Burlington Mall",
    intelligence: 100,
    strength: 100,
    speed: 99,
    url: "https://vignette1.wikia.nocookie.net/es.futurama/images/1/19/Ulr.png/revision/latest?cb=20130123214147"
  ) }

  let!(:first_user) { User.create(
    id: 1,
    first_name: "Homestar",
    last_name: "Runner",
    email: "home@star.com",
    password: "wowwow123",
  ) }

  let!(:second_user) { User.create(
    id: 2,
    first_name: "Miss",
    last_name: "Marzipan",
    email: "marzy@panner.com",
    password: "holysnacks123",
  ) }

  let!(:first_review) { Review.create(
    id: 1,
    rating: 5,
    body: "What an awesome superhero wow",
    user: first_user,
    cape: first_cape
  ).to_json }

  let!(:second_review) { Review.create(
    id: 2,
    rating: 7,
    body: "What an average superhero blah",
    user: second_user,
    cape: second_cape
  ).to_json }

  describe "GET#index" do
    it "should return the capes and their names" do
      get :index, params: {
        cape_id: first_cape.id,
        reviews: first_cape.reviews
      }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["reviews"].length).to be 2

      expect(returned_json["reviews"][0].length).to be 8
      expect(returned_json["reviews"][1].length).to be 8

      expect(returned_json["reviews"][0]["rating"]).to eq 5
      expect(returned_json["reviews"][0]["body"]).to eq "What an awesome superhero wow"
      expect(returned_json["reviews"][0]["user_id"]).to eq 1
      expect(returned_json["reviews"][0]["user_full_name"]).to eq "Homestar Runner"
      expect(returned_json["reviews"][0]["cape_id"]).to eq 1

      expect(returned_json["reviews"][1]["rating"]).to eq 7
      expect(returned_json["reviews"][1]["body"]).to eq "What an average superhero blah"
      expect(returned_json["reviews"][1]["user_id"]).to eq 2
      expect(returned_json["reviews"][1]["user_full_name"]).to eq "Miss Marzipan"
      expect(returned_json["reviews"][1]["cape_id"]).to eq 2
    end
  end
end
