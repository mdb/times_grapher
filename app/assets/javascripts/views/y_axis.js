define('views/y_axis', [
  'underscore',
  'backbone',
  'views/y_axis_label'
], function(
  _,
  Backbone,
  AxisLabelView
) {

  var YAxisView = Backbone.View.extend({
    el: '.y-axis',

    render: function () {
      var length = this.collection.factors().length,
          index;

      this.$el.html('');

      for (index = 0; index < length; index++) {
        this.$el.append(new AxisLabelView({
          label: this.collection.factors()[index],
          index: index
        }).render());
      }
    }
  });

  return YAxisView;
});
