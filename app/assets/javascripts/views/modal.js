define('views/modal', [
  'views/templates/modal',
  'views/articles',
  'collections/articles',
  'underscore',
  'backbone'
], function(
  ModalTemplate,
  ArticlesView,
  ArticlesCollection,
  _,
  Backbone
) {

  var Modal = Backbone.View.extend({
    initialize: function (opts) {
      this.template = ModalTemplate({
        term: this.model.get('term')
      });
    },

    modalContainer: function () {
      return $('.modal-container');
    },

    render: function () {
      this.modalContainer().append(this.template);
      this.renderArticles();
    },

    renderArticles: function () {
      this.articlesCollection = new ArticlesCollection(this.model.get('articles'), {
        term: this.model.get('term')
      });

      this.articles = new ArticlesView({
        collection: this.articlesCollection
      });

      this.articles.render();
    }
  });

  return Modal;
});
