define('views/bars', [
  'underscore',
  'backbone',
  'views/bar'
], function(
  _,
  Backbone,
  BarView
) {

  var BarsView = Backbone.View.extend({
    el: '.bars',

    render: function () {
      var index,
          length = this.collection.models.length;

      this.$el.html('');

      for (index = 0; index < length; index++) {
        this.$el.append(new BarView({
          model: this.collection.models[index],
          index: index
        }).render());
      }
    }
  });

  return BarsView;
});
