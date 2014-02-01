define('views/labels', [
  'underscore',
  'backbone',
  'views/label'
], function(
  _,
  Backbone,
  LabelView
) {

  var LabelsView = Backbone.View.extend({
    el: '.labels',

    render: function () {
      var label,
          length = this.collection.terms.length,
          index;

      this.$el.html('');

      for (index = 0; index < length; index++) {
        this.$el.append(new LabelView({
          term: this.collection.terms[index],
          index: index
        }).render());
      }
    }
  });

  return LabelsView;
});
