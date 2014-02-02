define('views/graph', [
  'underscore',
  'backbone',
  'views/labels',
  'views/bars',
  'views/y_axis',
  'views/templates/graph_heading'
], function(
  _,
  Backbone,
  LabelsView,
  BarsView,
  YAxisView,
  GraphHeadingTemplate
) {

  var GraphView = Backbone.View.extend({
    el: '.graph',

    headingEl: function () {
      return $('h2.graph-heading');
    },

    render: function () {
      $('footer').removeClass('no-search').addClass('has-search');
      this.$el.show();
      this.renderHeading();
      this.renderLabels();
      this.renderYAxis();
      this.renderBars();
    },

    renderHeading: function () {
      var template = GraphHeadingTemplate,
          collection = this.collection,
          heading = this.headingEl();

      heading.html('');

      heading.append(template({
        year: collection.year,
        termOne: collection.terms[0],
        termTwo: collection.terms[1],
        hits: collection.hits()
      }));
    },

    renderLabels: function () {
      this.labels = new LabelsView({collection: this.collection});
      this.labels.render();
    },

    renderYAxis: function () {
      this.yAxis = new YAxisView({collection: this.collection});
      this.yAxis.render();
    },

    renderBars: function () {
      this.bars = new BarsView({collection: this.collection});
      this.bars.render();
    }
  });

  return GraphView;
});
