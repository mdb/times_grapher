require 'spec_helper'

describe HomeController do
  describe 'routing' do
    it 'routes / to #index' do
      get('/').should route_to 'home#index'
    end

    it 'routes /:year/:term_one/:term_two to #index' do
      get('/2014/foo/bar').should route_to(
        controller: 'home',
        action: 'index',
        year: '2014',
        term_one: 'foo',
        term_two: 'bar'
      )
    end
  end
end
