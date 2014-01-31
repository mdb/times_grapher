define('routers/app_router', [
  'underscore',
  'backbone',
  'collections/times_query',
  'views/graph',
  'views/form'
], function(
  _,
  Backbone,
  TimesQueryCollection,
  GraphView,
  FormView
) {

  var AppRouter = Backbone.Router.extend({
    initialize: function () {
      if (!Backbone.History.started) Backbone.history.start({ pushState: true });
      _.templateSettings.evaluate = /\{\{(.+?)\}\}/g;
      _.templateSettings.interpolate = /\{\{=(.+?)\}\}/g;
      this.form = new FormView({router: this});
    },

    routes: {
      ':year/:termOne/:termTwo': 'renderGraph'
    },

    renderGraph: function (year, termOne, termTwo) {
      var self = this;

      self.collection = new TimesQueryCollection({
        year: year,
        terms: [termOne, termTwo]
      });

      self.collection.on('sync', function () {
        self.view = new GraphView({
          collection: self.collection
        });

        self.view.render();
      });
    }
  });

  return AppRouter;
});
