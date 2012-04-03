require 'rubygems'
require 'sinatra'
require 'compass'
require 'Haml'
require 'json'
require 'net/http'

get '/' do
  if params[:search1]
    @totals = get_totals(params)
    @overall_total = @totals.inject(:+)
  end

  haml:index
end

def get_totals(params)
  totals = []
  for i in 1...3
    search_param = "search".concat(i.to_s).to_sym
    data = get_json(params[search_param], '20110101', '20120101')
    totals.push data['total']
  end
  return totals
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
    if num != nil && total != nil
      return (100 * num)/total
    end
  end
end
