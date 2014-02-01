define('views/form', [
  'underscore',
  'backbone'
], function(
  _,
  Backbone
) {

  var FormView = Backbone.View.extend({
    initialize: function (opts) {
      this.router = opts.router;
    },

    el: 'form',

    events: {
      'click .submit': 'navigate'
    },

    year: function () {
      return this.$el.find("select option:selected" ).text();
    },

    termOne: function () {
      return this.$el.find('input[name=search1]').val();
    },

    termTwo: function () {
      return this.$el.find('input[name=search2]').val();
    },

    navigate: function (evt) {
      if (evt && evt.preventDefault) evt.preventDefault();
      this.router.navigate(this.queryUrl(), true);
    },

    queryUrl: function () {
      return this.year() + '/' + this.termOne() + '/' + this.termTwo();
    },
  });

  return FormView;
});
