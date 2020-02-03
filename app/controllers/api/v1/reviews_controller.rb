class Api::V1::ReviewsController < ApiController
  before_action :authenticate_user!, except: [:show]

  def index
    render json: Review.all
  end

  def show
    cape = Cape.find(params["id"])
    reviews = cape.reviews
    render json: reviews
  end

  protected

  def authorize_user
     if !user_signed_in || !current_user.admin?
       flash[:notice] = "You do not have access to this page."
       redirect_to root_path
     end
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
