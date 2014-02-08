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

    elSelector: function () {
      return '#modal-' + this.model.get('term');
    },

    events: {
      'click button': 'loadMore'
    },

    modalContainer: function () {
      return $('.modal-container');
    },

    loadMore: function () {
      var self = this;

      self.articlesCollection.fetch({
        remove: false,
        success: function () {
          self.renderArticles();
        }
      });
    },

    render: function () {
      this.modalContainer().append(this.template);
      this.renderArticles();
      this.setElement(this.elSelector());
    },

    renderArticles: function () {
      if (!this.articles) this.setUpArticles();
      this.articles.render();
    },

    setUpArticles: function () {
      this.setUpArticlesCollection();
      this.setUpArticlesView();
    },

    setUpArticlesView: function () {
      this.articles = new ArticlesView({
        collection: this.articlesCollection
      });
    },

    setUpArticlesCollection: function () {
      this.articlesCollection = new ArticlesCollection(this.model.get('articles'), {
        term: this.model.get('term'),
        year: this.model.get('year')
      });
    }
  });

  return Modal;
});
