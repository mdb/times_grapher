define('views/templates/modal', [
  'underscore',
  'underscore_config'
], function(
  _,
  underscoreConfig
) {

  var template = [
    '<div class="modal" id="modal-{{= hyphenatedTerm }}">',
      '<div>',
        '<a class="close" href="#">x</a>',
        '<ul class="articles-{{= hyphenatedTerm }} articles"></ul>',
        '<button>Load more</button>',
      '</div>',
    '</div>'
  ];

  return _.template(template.join(''));
});
