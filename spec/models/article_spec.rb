require 'spec_helper'

describe Article do

  subject { article }

  let(:article) { described_class.new(json_doc) }

  let(:json_doc) {
    {
      :headline => {
        :main => 'some_headline'
      },
      :pub_date => '2009-12-31T13:09:48Z',
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

    context "when there is no 'byline' property in its JSON" do
      let(:json_doc) {
        {
          foo: 'bar'
        }.to_json
      }

      it { should eq nil }
    end

    context "when 'byline' is an empty array" do
      let(:json_doc) {
        {
          byline: []
        }.to_json
      }

      it { should eq nil }
    end
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

    it { should eq '2009-12-31T13:09:48Z' }
  end

  describe '#pretty_pub_date' do
    subject { article.pretty_pub_date }

    it { should eq 'Thursday, December 31, 2009' }
  end
end
