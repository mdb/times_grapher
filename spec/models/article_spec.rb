require 'spec_helper'

describe Article do

  subject { article }

  let(:article) { described_class.new(json_doc) }

  let(:json_doc) {
    {
      :headline => {
        :main => 'some_headline'
      },
      :pub_date => 'some_pub_date',
      :byline => {
        :original => 'some_byline'
      },
      :web_url => 'some_url',
      :snippet => 'some_snippet'
    }.to_json
  }

  describe '#main_headline' do
    subject { article.main_headline }

    it { should eq 'some_headline' }
  end

  describe '#original_byline' do
    subject { article.original_byline }

    it { should eq 'some_byline' }
  end

  describe '#url' do
    subject { article.url }

    it { should eq 'some_url' }
  end

  describe '#snippet' do
    subject { article.snippet }

    it { should eq 'some_snippet' }
  end

  describe '#pub_date' do
    subject { article.pub_date }

    it { should eq 'some_pub_date' }
  end
end
