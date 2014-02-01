define('views/bar', [
  'views/templates/bar',
  'underscore',
  'backbone'
], function(
  BarTemplate,
  _,
  Backbone
) {

  var BarView = Backbone.View.extend({
    initialize: function (opts) {
      this.index = opts.index;
      this.template = BarTemplate;
    },

    render: function () {
      return this.template({
        term: this.model.get('term'),
        percent: this.model.get('percent'),
        index: this.index,
        count: this.model.get('hits')
      });
    }
  });

  return BarView;
});
