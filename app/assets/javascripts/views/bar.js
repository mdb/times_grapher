define('views/bar', [
  'views/templates/bar',
  'views/modal',
  'underscore',
  'backbone'
], function(
  BarTemplate,
  Modal,
  _,
  Backbone
) {

  var BarView = Backbone.View.extend({
    initialize: function (opts) {
      this.index = opts.index;
      this.template = BarTemplate;
    },

    render: function () {
      this.renderModal();

      return this.template({
        term: this.model.get('term'),
        percent: this.model.get('percent'),
        index: this.index,
        count: this.model.get('hits')
      });
    },

    renderModal: function () {
      this.modal = new Modal({
        model: this.model
      });

      this.modal.render();
    }
  });

  return BarView;
});
