require 'spec_helper'

describe TimesQueryCollection do

  before :each do
    ENV.stub(:[]).and_return 'API_KEY'
  end

  subject { times_query_collection }

  let(:times_query_collection) { described_class.new(['bush', 'gore']) }

  describe '#query_terms' do
    subject { times_query_collection.query_terms }

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
end
