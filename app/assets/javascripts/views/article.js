define('views/article', [
  'views/templates/article',
  'underscore',
  'backbone'
], function(
  ArticleTemplate,
  _,
  Backbone
) {

  var ArticleView = Backbone.View.extend({
    initialize: function (opts) {
      this.template = ArticleTemplate;
    },

    render: function () {
      return this.template({
        title: this.model.get('title'),
        url: this.model.get('url'),
        datePublished: this.model.get('datePublished'),
        byline: this.model.get('byline'),
        snippet: this.model.get('snippet')
      });
    }
  });

  return ArticleView;
});
