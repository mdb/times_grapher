define('views/label', [
  'views/templates/label',
  'underscore',
  'backbone'
], function(
  LabelTemplate,
  _,
  Backbone
) {

  var LabelView = Backbone.View.extend({
    initialize: function (opts) {
      this.term = opts.term;
      this.index = opts.index;
      this.template = LabelTemplate;
    },

    render: function () {
      return this.template({term: this.term, index: this.index});
    }
  });

  return LabelView;
});
