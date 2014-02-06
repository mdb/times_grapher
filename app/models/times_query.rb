require 'net/http'

class TimesQuery
  attr_reader :options, :term, :year, :response

  BASE_URL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?'

  def initialize(query_term, options = {})
    @options = {
      :year => '2013',
      :page => 0
    }.merge(options)

    @term = query_term
    @year = @options[:year]
  end

  def response
    @response ||= api_query
  end

  def status_code
    response.code
  end

  def results
    @results ||= JSON.parse(response.body)['response']['docs']
  end

  def hits
    JSON.parse(response.body)['response']['meta']['hits']
  end

  def articles
    @articles ||= results.map { |result| Article.new(result.to_json) }
  end

  def begin_date
    query_date 'begin'
  end

  def end_date
    query_date 'end'
  end

  def url
    "#{BASE_URL}fq=#{term}&facet_field=day_of_week&begin_date=#{begin_date}&end_date=#{end_date}&page=#{options[:page]}&api-key=#{api_key}"
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
