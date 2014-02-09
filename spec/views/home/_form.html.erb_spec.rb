require 'spec_helper'

describe "home/_form.html.erb" do
  before(:each) do
    render '/home/form'
  end

  it "renders the proper root form element" do
    rendered.should have_selector "form"
  end

  it "renders a fieldset" do
    rendered.should have_selector "form fieldset"
  end

  it "renders a first search input" do
    rendered.should have_selector "form input[name=search1]"
  end

  it "renders a second search input" do
    rendered.should have_selector "form input[name=search2]"
  end

  it "renders an option selector" do
    rendered.should have_selector "form select[name=year]"
  end

  it "renders a 2013 - 1981 options selectors" do
    rendered.should have_selector "option"
  end

  it "renders a submit input" do
    rendered.should have_selector "input.submit"
  end
end
