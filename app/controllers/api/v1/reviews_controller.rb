class Api::V1::ReviewsController < ApiController
  def show
    cape = Cape.find(params["id"])
    reviews = cape.reviews
    render json: reviews
  end

  def create
    binding.pry
    cape = Cape.find(params["id"])
    review = Review.new(review_params)
    review.cape = cape
    review.user = current_user
    binding.pry

    if review.save
      render json: { review: review }
    else
      render json: { error: review.errors.full_messages }, status: unprocessable_entity
    end
  end

  private
    def review_params
      params.permit("rating", "body")
    end
end
