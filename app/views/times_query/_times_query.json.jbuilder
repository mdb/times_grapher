json.term times_query.query_term
json.articles do
  json.array! times_query.articles, partial: 'article', as: :article
end
