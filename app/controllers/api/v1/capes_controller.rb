class Api::V1::CapesController < ApiController
  def index
    render json: Cape.all
  end

  def show
    render json: Cape.find(params[:id])
  end
end
