require 'net/http'

class TimesQuery
  attr_reader :query_term
  attr_reader :year
  attr_reader :response

  BASE_URL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?'

  def initialize(query_term, options = {})
    options = {
      :year => '2013',
      :offset => 0
    }.merge(options)

    @query_term = query_term
    @year = options[:year]
  end

  def response
    @response ||= api_query
  end

  def results
    JSON.parse(response.body)['response']['docs']
  end

  def begin_date
    query_date 'begin'
  end

  def end_date
    query_date 'end'
  end

  def url
    "#{BASE_URL}fq=#{query_term}&facet_field=day_of_week&begin_date=#{begin_date}&end_date=#{end_date}&api-key=#{api_key}"
  end

  private

  def api_query
    Net::HTTP.get_response(URI.parse(url))
  end

  def api_key
    api_key = ENV['NY_TIMES_API_KEY']

    raise "Missing $NY_TIMES_API_KEY environment variable" unless api_key

    api_key
  end

  def query_date(begin_or_end)
    case begin_or_end
    when 'end'
      "#{@year}1231"
    when 'begin'
      "#{@year}0101"
    end
  end
end