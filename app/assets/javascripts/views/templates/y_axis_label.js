define('views/templates/y_axis_label', [
  'underscore',
  'underscore_config'
], function(
  _,
  underscoreConfig
) {

  return _.template('<li class="label-{{= index }}">{{= label }}</li>');
});
