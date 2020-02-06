class Api::V1::CapesController < ApiController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    render json: Cape.all
  end

  def show
    render json: Cape.find(params["id"])
  end

  def create
    cape = Cape.new(cape_params)
    binding.pry
    cape.user = current_user
    if cape.save
      render json: cape
    else
      render json: { errors: cape.errors.full_messages }
    end
  end

  def update
    cape = Cape.find(params["id"])
    cape.update(cape_params)

    if cape.save
      flash[:notice] = "Superhero was successfully updated!"
    else
      flash.now[:errors] = cape.errors.full_messages.to_sentence
      render json: cape
    end
  end

  protected
  def cape_params
    params.require(:cape).permit(:name,:full_name,:gender,:affiliation,:intelligence,:strength,:speed,:url)
  end

  def authorize_user
    if !user_signed_in
      render json: { message: "Please sign in to access this page" }
    end
  end
end
