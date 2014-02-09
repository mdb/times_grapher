[![Build Status](https://travis-ci.org/mdb/times_grapher.png?branch=master)](https://travis-ci.org/mdb/times_grapher)

# TimesGrapher

Compare the the New York Times coverage of any two topics in any year between 1981 and 2013.

TimesGrapher is built on [Rails](http://rubyonrails.org/) and [Backbone.js](http://backbonejs.org/). It uses the New York Times' [articles search API](http://developer.nytimes.com/docs/read/article_search_api_v2).

[View TimesGrapher &raquo;](http://timesgrapher.herokuapp.com)

## Development

You must have a valid articles search New York Times API key. Set this as your $NY_TIMES_API_KEY environment variable.

```
git clone https://github.com/mdb/times_grapher.git
cd times_grapher
bundle install
rails server
```

## Running tests

TimesGrapher uses Rspec to test Ruby & Jasmine to test its JavaScript.

To run the tests:

```
bundle exec rake
```

## Deployment

TimesGrapher is set up for easy [Heroku](https://www.heroku.com/) deployment.

Assuming you have a Heroku account and the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command):

```
cd times_grapher
heroku create
heroku config:set NY_TIMES_API_KEY=<your NY_TIMES_API_KEY here>
git push heroku master
```
