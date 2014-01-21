require 'spec_helper'

describe ApiController do
  describe 'routing' do
    it 'routes /api to #index' do
      get('/api').should route_to 'api#index'
    end
  end
end
