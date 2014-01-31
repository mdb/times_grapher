require 'spec_helper'

describe "home/_graph.html.erb" do
  before(:each) do
    render '/home/graph'
  end

  it "renders a graph heading element" do
    rendered.should have_selector "h2.graph-heading"
  end

  it "renders the proper root div element" do
    rendered.should have_selector "div.graph"
  end

  it "renders an unordered list tag to contain the bar graph bars" do
    rendered.should have_selector "div.graph ul.bars"
  end

  it "renders an unordered list tag to contain graph labels" do
    rendered.should have_selector "div.graph ul.labels"
  end

  it "renders an unordered list tag to contain the graph's y-axis labels" do
    rendered.should have_selector "div.graph ul.y-axis"
  end
end
