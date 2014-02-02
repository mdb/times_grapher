define('views/bar', [
  'views/templates/bar',
  'views/articles_modal',
  'underscore',
  'backbone'
], function(
  BarTemplate,
  ArticlesModal,
  _,
  Backbone
) {

  var BarView = Backbone.View.extend({
    initialize: function (opts) {
      this.index = opts.index;
      this.template = BarTemplate;
    },

    el: 'li.bar',

    events: {
      'click a': 'renderModal'
    },

    render: function () {
      return this.template({
        term: this.model.get('term'),
        percent: this.model.get('percent'),
        index: this.index,
        count: this.model.get('hits')
      });
    },

    renderModal: function () {
      alert('here')
      this.articles = new ArticlesModal();
      this.articles.render();
      ARTICLES = this.articles
    }
  });

  return BarView;
});
