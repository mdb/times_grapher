require(['underscore'], function (_) {
  _.templateSettings.evaluate = /\{\{(.+?)\}\}/g;
  _.templateSettings.interpolate = /\{\{=(.+?)\}\}/g;
});
