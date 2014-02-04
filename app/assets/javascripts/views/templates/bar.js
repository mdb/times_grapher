define('views/templates/bar', [
  'underscore',
  'underscore_config'
], function(
  _,
  underscoreConfig
) {

  var template = [
    '<li class="bar bar-{{= index }}" style="height: {{= percent }}%;">',
      '<a href="#modal-{{= term }}" title="Browse articles">{{= count}}</a>',
    '</li>'
  ];

  return _.template(template.join(''));
});
