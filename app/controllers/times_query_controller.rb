class TimesQueryController < ApplicationController
  before_filter :force_json

  def index
    year = params[:year] ? params[:year] : '2014'
    page = params[:page] ? params[:page] : '0'

    @times_query_collection = TimesQueryCollection.new([params[:terms]].flatten, year: year, page: page)
  end

  private

  def force_json
    request.format = :json
  end
end
