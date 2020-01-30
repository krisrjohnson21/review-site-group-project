class Api::V1::CapesController < ApiController

  def index
    render json: Cape.all
  end

  def show
    render json: Cape.find(params[:id])
  end

  def from_api
   check_db = Cape.find_by name: cape_params[:name]
   if check_db
     render json: check_db[:id]
   else
     cape = Cape.create(cape_params)
     render json: cape
   end
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
   params.require(:cape).permit(:name,:full_name,:gender,:affiliation,:intelligence,:strength,:speed,:url)
 end
end
