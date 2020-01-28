class Api::V1::CapesController < ApiController

  def index
    render json: Cape.all
  end
end
