class TimesQueryCollection
  attr_reader :options
  attr_reader :terms
  attr_reader :year
  attr_reader :items

  def initialize(query_terms = [], opts = {})
    @options = {
      :year => '2013',
      :offset => 0
    }.merge(opts)

    @terms = query_terms
    @year = options[:year]
  end

  def items
    @items ||= @terms.map { |term| TimesQuery.new(term, @options) }
  end

  def percent(term)
    (100 * items.find { |item| item.term == term }.hits)/hits
  end

  def hits
    items.map { |item| item.hits }.inject(:+)
  end
end
