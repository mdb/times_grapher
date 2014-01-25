require 'spec_helper'

describe 'times_query/_times_query' do
  let(:times_query) {
    double('TimesQuery',
      articles: [article],
      query_term: 'some_query_term'
    )
  }

  let(:article) {
    double('Article',
      main_headline: 'main_headline',
      url: 'some_url',
      pub_date: 'some_pub_date',
      snippet: 'some_snippet',
      original_byline: 'some_original_byline'
    )
  }

  before :each do
    assign(:times_query, times_query)
    render '/times_query/times_query', times_query: times_query
  end

  context 'verifying JSON values' do
    subject { JSON.parse(rendered) }
    its(['term']) { should eq 'some_query_term' }
  end
end
