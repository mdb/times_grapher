define('views/templates/bar', [
], function(
) {

  var template = [
    '<li class="bar-{{= index }}" style="height: {{= percent }}%;">',
      '<a href="#" title="Browse articles">{{= count}}</a>',
    '</li>'
  ];

  return _.template(template.join(''));
});
