class Api::V1::CapesController < ApiController

  def index
    render json: Cape.all
  end

  def show
    render json: Cape.find(params[:id])
  end

 def create
  cape = Cape.new(cape_params)

  if cape.save
     render json: cape
  else
     render json: { errors: cape.errors.full_messages }
  end
 end

 private

 def cape_params
   params.permit(:name,:fullName,:gender,:affiliation,:intelligence,:strength,:speed,:url)
 end
end
