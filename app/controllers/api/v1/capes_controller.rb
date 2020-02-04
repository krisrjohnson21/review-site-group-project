class Api::V1::CapesController < ApiController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    render json: Cape.all
  end

  def show
    cape = Cape.find(params[:id])
    serialized = ActiveModelSerializers::SerializableResource.new(
      cape.reviews.order('created_at DESC'),
      each_serializer: ReviewSerializer
    )
    render json: {
     cape: cape,
     reviews: serialized,
     user: current_user
   }
  end

  def create
    cape = Cape.new(cape_params)
    cape.user = current_user
    if cape.save
      render json: cape
    else
      render json: { errors: cape.errors.full_messages }
    end
  end

  protected
  def cape_params
    params.require(:cape).permit(:name,:fullName,:gender,:affiliation,:intelligence,:strength,:speed,:url, :user)
  end

  def authorize_user
    if !user_signed_in || !current_user.admin?
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end
end
