define('views/articles', [
  'underscore',
  'backbone',
  'views/article',
  'models/article'
], function(
  _,
  Backbone,
  ArticleView,
  Article
) {

  var ArticlesView = Backbone.View.extend({
    el: function () {
      return '.articles-' + this.collection.term;
    },

    render: function () {
      var index,
          articles = this.collection.models,
          length = articles.length;

      this.$el.html('');

      for (index = 0; index < length; index++) {
        this.$el.append(new ArticleView({
          model: articles[index]
        }).render());
      }
    }
  });

  return ArticlesView;
});
