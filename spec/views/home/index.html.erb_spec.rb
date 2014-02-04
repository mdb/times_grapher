require 'spec_helper'

describe "home/index.html.erb" do
  before(:each) do
    render template: 'home/index', layout: 'layouts/application'
  end

  it "renders a modal container" do
    rendered.should have_selector "div.modal-container"
  end
end
