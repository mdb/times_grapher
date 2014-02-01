define('views/templates/label', [
  'underscore',
  'underscore_config'
], function(
  _,
  underscoreConfig
) {

  return _.template('<li class="label-{{= index }}">{{= term }}</li>');
});
