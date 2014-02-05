define('views/modal', [
  'views/templates/modal',
  'views/articles',
  'underscore',
  'backbone'
], function(
  ModalTemplate,
  ArticlesView,
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
      this.articles = new ArticlesView({
        model: this.model
      });

      this.articles.render();
    }
  });

  return Modal;
});
