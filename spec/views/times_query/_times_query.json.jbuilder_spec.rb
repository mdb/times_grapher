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

    context "the articles array it renders" do
      it "reports an articles array" do
        JSON.parse(rendered)['articles'].class.should eq Array
      end

      context "each article in the articles array" do
        it "has a title" do
          JSON.parse(rendered)['articles'][0]['title'].should eq 'main_headline'
        end

        it "has a url" do
          JSON.parse(rendered)['articles'][0]['url'].should eq 'some_url'
        end

        it "has a datePublished" do
          JSON.parse(rendered)['articles'][0]['datePublished'].should eq 'some_pub_date'
        end

        it "has a snippet" do
          JSON.parse(rendered)['articles'][0]['snippet'].should eq 'some_snippet'
        end

        it "has a byline" do
          JSON.parse(rendered)['articles'][0]['byline'].should eq 'some_original_byline'
        end
      end
    end
  end
end
