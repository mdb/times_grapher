require 'spec_helper'

describe TimesQueryController do
  before :each do
    get :index
  end

  it 'uses the index template' do
    response.should render_template 'times_query/index'
  end
end
