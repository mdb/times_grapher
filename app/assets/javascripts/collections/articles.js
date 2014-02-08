define('collections/articles', [
  'underscore',
  'backbone',
  'models/article'
], function(
  _,
  Backbone,
  Article
) {

  var ArticlesCollection = Backbone.Collection.extend({
    initialize: function (models, opts) {
      this.term = opts.term;
      this.pageOffset = 0;
      this.year = opts.year;
    },

    model: Article,

    url: '/query',

    fetch: function (opts) {
      this.pageOffset++;

      var options = _.defaults(opts, {
        data: $.param({
          terms: this.term,
          year: this.year,
          page: this.pageOffset
        })
      });

      return Backbone.Collection.prototype.fetch.call(this, options);
    },

    parse: function(resp, xhr) {
      return resp[0].articles;
    }
  });

  return ArticlesCollection;
});
