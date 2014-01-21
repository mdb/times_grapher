class ApiController < ApplicationController
  before_filter :force_json

  def index
    year = params[:year] ? params[:year] : '2014'

    @queries = TimesQueryCollection.new([params[:terms]].flatten, :year => year)
  end

  private

  def force_json
    request.format = :json
  end
end
