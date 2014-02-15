require 'spec_helper'

describe "home/index.html.erb" do
  before(:each) do
    render template: 'home/index', layout: 'layouts/application'
  end

  it "renders a modal container" do
    rendered.should have_selector "div.modal-container"
  end

  context "the 'about' modal it renders" do
    it "renders the proper root div" do
      rendered.should have_selector "div#about"
    end

    it "renders the proper container div" do
      rendered.should have_selector "div.about"
    end

    it "renders the proper heading" do
      rendered.should have_selector "div.about h1",
        text: 'About TimesGrapher'
    end

    it "renders the proper heading" do
      rendered.should have_selector "div.about h1",
        text: 'About TimesGrapher'
    end

    it "renders the proper message about the app's data" do
      rendered.should have_selector "div.about p",
        text: "TimesGrapher utilizes the New York Times' articles API"
    end

    it "renders the proper message about the app's technology" do
      rendered.should have_selector "div.about p",
        text: "It's built on Rails and Backbone.js"
    end

    it "renders the proper disclaimer" do
      rendered.should have_selector "div.about p",
        text: "It is not affiliated with the New York Times."
    end

    it "renders the proper message about its source code" do
      rendered.should have_selector "div.about p",
        text: "View its source code on Github"
    end

    it "renders the proper copyright message" do
      rendered.should have_selector "div.about p",
        text: "© 2014 MDB"
    end
  end
end
