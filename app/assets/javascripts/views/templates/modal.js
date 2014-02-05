define('views/templates/modal', [
  'underscore',
  'underscore_config'
], function(
  _,
  underscoreConfig
) {

  var template = [
    '<div class="modal" id="modal-{{= term }}">',
      '<div>',
        '<a class="close" href="#">x</a>',
        '<ul class="articles-{{= term }} articles"></ul>',
      '</div>',
    '</div>'
  ];

  return _.template(template.join(''));
});
