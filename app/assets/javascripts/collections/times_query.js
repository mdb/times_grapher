define('collections/times_query', [
  'underscore',
  'backbone',
  'models/times_query'
], function(
  _,
  Backbone,
  TimesQuery
) {

  var TimesQueryCollection = Backbone.Collection.extend({
    url: '/query',

    model: TimesQuery
  });

  return TimesQueryCollection;
});
