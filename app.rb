require 'rubygems'
require 'sinatra'
require 'compass'
require 'sass'
require 'Haml'
require 'json'
require 'net/http'
require 'date'

get '/' do
  if params[:search1]
    @full_data = get_data(params)
    @totals = get_totals(@full_data)
    @queries = get_queries(params)
    @overall_total = @totals.inject(:+)
  end

  haml:index
end

get '/articles' do
  if params[:search] && params[:offset]
    @data = get_json(params[:search], :offset => params[:offset])
  end

  haml:articles
end

get '/stylesheets/:name.css' do
  scss(:"stylesheets/#{params[:name]}")
end

def get_queries(params)
  queries = []
  for i in 1...3
    search = params["search".concat(i.to_s).to_sym]
    queries.push search
  end
  return queries
end

def get_totals(data_array)
  totals = []
  data_array.each do |data|
    totals.push data['total']
  end
  return totals
end

def get_data(params)
  data_array = []
  for i in 1...3
    search_param = "search".concat(i.to_s).to_sym
    data = get_json(params[search_param])
    data_array.push data
  end
  return data_array
end

def get_json(query, options = {})
  options = {
    :begin_date => '20110101',
    :end_date => '20111231',
    :offset => 0
  }.merge(options)

  base_url = "http://api.nytimes.com/svc/search/v1/"
  api_key = ENV['NYTIMES_API_KEY']
  query = "article?format=json&query=#{query}&begin_date=#{options[:begin_date]}&end_date=#{options[:end_date]}&offset=#{options[:offset]}"
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

  def format_num(num)
    return num.to_s.reverse.gsub(/...(?=.)/,'\&,').reverse
  end

  def get_factors(num, divided_by)
    divided_by -= 1
    step = num.fdiv divided_by

    factors = (0..divided_by).map do |i|
      (i * step).round
    end

    factors.reverse
  end

  def format_date(string)
    return Date.parse(string, "%Y%m%d").strftime("%B %d, %Y")
  end

  def capitalize(string)
    return string.to_s.split(" ").each { |word| word.capitalize! }.join(" ")
  end    
end
