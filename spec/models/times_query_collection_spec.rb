require 'spec_helper'

describe TimesQueryCollection do

  before :each do
    ENV.stub(:[]).and_return 'API_KEY'
  end

  subject { times_query_collection }

  let(:times_query_collection) { described_class.new(['bush', 'gore']) }

  describe '#erms' do
    subject { times_query_collection.terms }

    it { should eq ['bush', 'gore'] }
  end

  describe '#year' do
    subject { times_query_collection.year }

    it { should eq '2013' }
  end

  describe '#items' do
    subject { times_query_collection.items.class }

    it { should eq Array }

  end

  describe "each item in #items" do
    subject { times_query_collection.items[0].class }

    it { should eq TimesQuery }
  end

  describe "#hits" do
    it "reports the total number of articles in the collection" do
      VCR.use_cassette('models/times_query_collection') do
        query = TimesQueryCollection.new ['bush', 'gore']
        query.hits.should eq 4584
      end
    end
  end

  describe "#percent" do
    it "reports the percent of the total hits for the term it's passed" do
      VCR.use_cassette('models/times_query_collection') do
        query = TimesQueryCollection.new ['bush', 'gore']
        query.percent(query.terms[0]).should eq 85
        query.percent(query.terms[1]).should eq 14
      end
    end
  end
end
