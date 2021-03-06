require 'spec_helper'

describe TimesQuery do

  before :each do
    ENV.stub(:[]).and_return 'API_KEY'
  end

  subject { times_query }

  let(:times_query) { described_class.new('bush') }

  describe '#options' do
    subject { times_query.options }

    context "default values" do
      its [:page] { should eq 0 }
      its [:year] { should eq '2013' }
    end

    context "when the TimesQuery is instantiated with non-default options" do
      let(:times_query_two) { described_class.new('bush', year: '2010', page: 2) }
      subject {times_query_two.options }

      its [:page] { should eq 2 }
      its [:year] { should eq '2010' }
    end
  end

  describe '#term' do
    subject { times_query.term }

    it { should eq 'bush' }
  end

  describe '#year' do
    subject { times_query.year }

    it { should eq '2013' }
  end

  describe '#begin_date' do
    subject { times_query.begin_date }

    it { should eq '20130101' }
  end

  describe '#end_date' do
    subject { times_query.end_date }

    it { should eq '20131231' }
  end

  describe '#url' do
    subject { times_query.url }

    it { should eq 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=bush&facet_field=day_of_week&begin_date=20130101&end_date=20131231&page=0&api-key=API_KEY' }

    context 'the term has a space' do
      let(:times_query_with_space) { described_class.new('george bush') }
      subject {times_query_with_space.url }

      it { should eq 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=george%20bush&facet_field=day_of_week&begin_date=20130101&end_date=20131231&page=0&api-key=API_KEY' }
    end
  end

  describe '#status_code' do
    it "reports the NY TIMES API response's status code" do
      VCR.use_cassette('models/times_query') do
        times_query.status_code.should eq '200'
      end
    end
  end

  describe '#hits' do
    it "returns the number of articles returned by the query" do
      VCR.use_cassette('models/times_query') do
        times_query.hits.should eq 3930
      end
    end
  end

  describe '#articles' do
    it "returns an array of articles" do
      VCR.use_cassette('models/times_query') do
        times_query.articles[0].class.should eq Article
        times_query.articles[0].main_headline.should eq 'Albums From Moon Honey, Peter Walker and Angola Soundtrack'
      end
    end
  end
end
