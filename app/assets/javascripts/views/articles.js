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
      return '.articles-' + this.model.get('term');
    },

    render: function () {
      var index,
          articles = this.model.get('articles') ? this.model.get('articles') : [],
          length = articles.length;

      this.$el.html('');

      for (index = 0; index < length; index++) {
        this.$el.append(new ArticleView({
          model: new Article(articles[index])
        }).render());
      }
    }
  });

  return ArticlesView;
});
