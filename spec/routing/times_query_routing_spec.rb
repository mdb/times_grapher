require 'spec_helper'

describe TimesQueryController do
  describe 'routing' do
    it 'routes /query to #index' do
      get('/query').should route_to 'times_query#index'
    end
  end
end
