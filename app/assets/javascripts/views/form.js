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
      this.populateInputs();
    },

    el: 'form',

    input: function (oneOrTwo) {
      return this.$el.find('input[name=search' + oneOrTwo + ']');
    },

    events: {
      'submit': 'navigate',
      'change select': 'navigate'
    },

    year: function () {
      return this.$el.find("select option:selected" ).text();
    },

    termOne: function () {
      return this.input('1').val();
    },

    termTwo: function () {
      return this.input('2').val();
    },

    navigate: function (evt) {
      if (evt && evt.preventDefault) evt.preventDefault();
      this.router.navigate(this.queryUrl(), true);
    },

    queryUrl: function () {
      return this.year() + '/' + this.termOne() + '/' + this.termTwo();
    },

    populateInputs: function () {
      var pathParts = Backbone.history.getFragment().split('/');

      if (pathParts.length < 3) return false;
      this.input('1').val(pathParts[1]);
      this.input('2').val(pathParts[2]);
    }
  });

  return FormView;
});
