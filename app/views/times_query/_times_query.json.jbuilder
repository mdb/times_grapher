json.term times_query.term
json.articles do
  json.array! times_query.articles, partial: 'article', as: :article
end
