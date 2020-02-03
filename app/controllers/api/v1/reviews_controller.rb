class Api::V1::ReviewsController < ApiController
  # skip_before_action :verify_authenticity_token, only: [:create]
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Review.all
  end

  def show
    cape = Cape.find(params["id"])
    reviews = cape.reviews
    render json: reviews
  end

  def create
    review = Review.new(review_params)
    cape = Cape.find(params["cape_id"])
    review.cape = cape
    review.user = current_user

    if review.save
      render json: review
    else
      render json: { error: review.errors.full_messages }, status: unprocessable_entity
    end
  end

  private
    def review_params
      params.permit("rating", "body")
    end
end
