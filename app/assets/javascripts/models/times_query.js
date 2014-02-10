define('models/times_query', [
  'underscore',
  'backbone'
], function(
  _,
  Backbone
) {

  var TimesQuery = Backbone.Model.extend({
    hyphenatedTerm: function () {
      return this.get('term').replace(' ', '-');
    }
  });

  return TimesQuery;
});
