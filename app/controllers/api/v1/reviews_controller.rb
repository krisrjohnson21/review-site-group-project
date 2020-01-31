class Api::V1::ReviewsController < ApiController
  def show
    cape = Cape.find(params["id"])
    reviews = cape.reviews
    render json: reviews
  end
end
