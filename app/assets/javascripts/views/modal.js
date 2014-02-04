define('views/modal', [
  'views/templates/modal',
  'underscore',
  'backbone'
], function(
  ModalTemplate,
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
    }
  });

  return Modal;
});
