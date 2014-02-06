json.term       times_query.term
json.year       times_query.year
json.hits       times_query.hits
json.pageOffset times_query.options[:page]
json.percent    times_query_collection.percent(times_query.term)
json.totalHits  times_query_collection.hits
json.factors    times_query_collection.factors(6)
json.articles do
  json.array! times_query.articles, partial: 'article', as: :article
end
