define('views/templates/modal', [
  'underscore',
  'underscore_config'
], function(
  _,
  underscoreConfig
) {

  var template = [
    '<div class="modal" id="modal-{{= hyphenatedTerm }}">',
      '<div class="modal-content">',
        '<a class="close" href="#">x</a>',
        '<div class="modal-inner-content">',
          '<ul class="articles-{{= hyphenatedTerm }} articles"></ul>',
          '<button>Load more</button>',
        '</div>',
      '</div>',
    '</div>'
  ];

  return _.template(template.join(''));
});
