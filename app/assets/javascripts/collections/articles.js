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
    },

    model: Article
  });

  return ArticlesCollection;
});
