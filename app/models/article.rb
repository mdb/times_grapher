class Article
  def initialize(json_doc)
    @json = JSON.parse(json_doc)
  end

  def main_headline
    @json['headline']['main']
  end

  def url
    @json['web_url']
  end

  def snippet
    @json['snippet']
  end

  def pub_date
    @json['pub_date']
  end

  def original_byline
    @json['byline']['original'] unless @json['byline'].nil? || @json['byline'].empty?
  end
end
