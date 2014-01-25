json.year = @times_query_collection.year
json.term = @times_query_collection.query_terms
json.results do
  json.array! @times_query_collection.items, partial: 'times_query', as: :times_query
end
