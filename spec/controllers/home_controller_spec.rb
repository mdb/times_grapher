require 'spec_helper'

describe HomeController do
  before :each do
    get :index
  end

  it 'uses the home template' do
    response.should render_template 'home/index'
  end
end
