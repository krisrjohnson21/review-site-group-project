class Api::V1::CapesController < ApiController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    render json: Cape.all
  end

  def show
    render json: Cape.find(params[:id])
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
    if !user_signed_in
      render json: { message: "Please sign in to access this page" }
    end
  end
end
