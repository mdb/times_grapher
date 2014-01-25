class TimesQueryCollection
  attr_reader :options
  attr_reader :query_terms
  attr_reader :year
  attr_reader :items

  def initialize(query_terms = [], opts = {})
    @options = {
      :year => '2013',
      :offset => 0
    }.merge(opts)

    @query_terms = query_terms
    @year = options[:year]
  end

  def items
    @items ||= @query_terms.map { |term| TimesQuery.new(term, @options) }
  end
end
