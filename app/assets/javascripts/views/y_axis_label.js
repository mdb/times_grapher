define('views/y_axis_label', [
  'views/templates/y_axis_label',
  'underscore',
  'backbone'
], function(
  YAxisTemplate,
  _,
  Backbone
) {

  var YAxisLabelView = Backbone.View.extend({
    initialize: function (opts) {
      this.index = opts.index;
      this.label = opts.label;
      this.template = YAxisTemplate;
    },

    render: function () {
      return this.template({label: this.label, index: this.index});
    }
  });

  return YAxisLabelView;
});
