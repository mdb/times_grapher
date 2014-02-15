require 'spec_helper'

describe 'times_query/_article' do
  let(:article) {
    double('Article',
      main_headline: 'main_headline',
      url: 'some_url',
      pretty_pub_date: 'some_pub_date',
      snippet: 'some_snippet',
      original_byline: 'some_original_byline'
    )
  }

  before :each do
    assign(:article, article)
    render '/times_query/article', article: article
  end

  context 'verifying JSON values' do
    subject { JSON.parse(rendered) }

    its(['title']) { should eq 'main_headline' }
    its(['url']) { should eq 'some_url' }
    its(['datePublished']) { should eq 'some_pub_date' }
    its(['snippet']) { should eq 'some_snippet' }
    its(['byline']) { should eq 'some_original_byline' }
  end
end
