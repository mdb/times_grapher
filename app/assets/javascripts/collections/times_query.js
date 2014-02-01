define('collections/times_query', [
  'underscore',
  'backbone',
  'models/times_query'
], function(
  _,
  Backbone,
  TimesQuery
) {

  var TimesQueryCollection = Backbone.Collection.extend({
    initialize: function (opts) {
      this.terms = opts.terms;
      this.year = opts.year;
      this.fetch({ data: $.param({ terms: this.terms, year: this.year}) });
    },

    url: '/query',

    model: TimesQuery,

    hits: function () {
      return this.models[0].get('totalHits');
    },

    factors: function () {
      return this.models[0].get('factors');
    },
  });

  return TimesQueryCollection;
});
