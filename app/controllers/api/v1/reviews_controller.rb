class Api::V1::ReviewsController < ApiController
  before_action :authenticate_user!, except: [:show]
  before_action :authorize_user, except: [:show, :create]

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
end
