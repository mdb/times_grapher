define('views/templates/graph_heading', [
  'underscore',
  'underscore_config'
], function(
  _,
  underscoreConfig
) {

  return _.template('<span>In <em>{{= year }}</em>, the New York Times published <em>{{= hits }}</em> articles containing <em>{{= termOne }}</em> or <em>{{= termTwo }}</em>.</span>');
});
