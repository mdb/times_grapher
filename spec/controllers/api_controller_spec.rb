require 'spec_helper'

describe ApiController do
  before :each do
    get :index
  end

  it 'uses the index template' do
    response.should render_template 'api/index'
  end
end
