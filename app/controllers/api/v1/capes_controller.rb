class Api::V1::CapesController < ApiController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :authorize_user, except: [:index, :show, :create]

  def index
    render json: Cape.all
  end

  def show
    render json: Cape.find(params[:id])
  end

 def create
   if user_signed_in?
     cape = Cape.new(cape_params)
     cape.user = current_user
     if cape.save
       render json: cape
    else
     render json: { errors: cape.errors.full_messages }
    end
  end
 end

 protected
 def cape_params
   params.require(:cape).permit(:name,:full_name,:gender,:affiliation,:intelligence,:strength,:speed,:url, :user)
 end

 def authorize_user
    if !user_signed_in || !current_user.admin?
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end
end
