class Article
  attr_reader :hash

  def initialize(article_hash)
    @hash = article_hash
  end

  def main_headline
    @hash[:headline][:main]
  end

  def url
    @hash[:web_url]
  end

  def snippet
    @hash[:snippet]
  end

  def pub_date
    @hash[:pub_date]
  end

  def original_byline
    @hash[:byline][:original]
  end
end
