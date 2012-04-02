require 'rubygems'
require 'sinatra'
require 'compass'
require 'Haml'
require 'json'
require 'net/http'

get '/' do
  # TODO: clean up this mess
  if params[:search1]
    search1 = get_json(params[:search1], '20110101', '20120101')
    if params[:search2]
      search2 = get_json(params[:search2], '20110101', '20120101')
    end
    @data = {
      :total1 => search1['total'],
      :total2 => search2['total'] ? search2['total'] : nil,
      :overall_total => search1['total'] + search2['total']
    }
  end

  haml:index
end

def get_json(query, begin_date, end_date)
  base_url = "http://api.nytimes.com/svc/search/v1/"
  api_key = ENV['NYTIMES_API_KEY']
  query = "article?format=json&query=#{query}&begin_date=#{begin_date}&end_date=#{end_date}"
  url = "#{base_url}#{URI.encode(query)}&api-key=#{api_key}"
  resp = Net::HTTP.get_response(URI.parse(url))
  data = resp.body

  # convert the returned JSON data to native Ruby
  # data structure - a hash
  result = JSON.parse(data)

  # if the hash has 'Error' as a key, then raise an error
  if result.has_key? 'Error'
    raise "web service error"
  end
  
  return result
end

helpers do
  def get_percent(num, total)
    return (100 * num)/total
  end
end
