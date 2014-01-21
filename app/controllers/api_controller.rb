class ApiController < ApplicationController
  def index
    year = params[:year] ? params[:year] : '2014'

    @queries = TimesQueryCollection.new([params[:terms]].flatten, :year => year)
  end
end
