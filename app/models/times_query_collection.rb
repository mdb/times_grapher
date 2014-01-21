class TimesQueryCollection
  attr_reader :options
  attr_reader :query_terms
  attr_reader :year

  def initialize(query_terms = [], options = {})
    @options = {
      :year => '2013',
      :offset => 0
    }.merge(options)

    @query_terms = query_terms
    @year = options[:year]
  end

  def items
    @query_terms.each { |term| TimesQuery.new(term, @options) }
  end
end
