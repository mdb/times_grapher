define('views/templates/article', [
  'underscore',
  'underscore_config'
], function(
  _,
  underscoreConfig
) {

  var template = [
    '<li class="article">',
      '<h2>',
        '<a href="{{= url }}">{{= title }}</a>',
      '</h2>',
      '<cite>{{= byline }}</cite>',
      '<time>Published {{= datePublished }}</time>',
      '<p>{{= snippet }}</p>',
    '</li>'
  ];

  return _.template(template.join(''));
});
