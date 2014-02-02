define('views/graph_spec', [
  'views/graph',
  'models/times_query',
  'collections/times_query'
], function(
  GraphView,
  TimesQuery,
  TimesQueryCollection
) {

  describe("GraphView", function () {
    var graph;

    beforeEach(function () {
      var collection = new TimesQueryCollection({
        terms: ['foo', 'bar'],
        year: '2014'
      });

      collection.models = [new TimesQuery({
        factors: ['100', '0'],
        term: 'foo',
        percent: '50',
        hits: '50',
        totalHits: '100'
      })];

      $('body').append('<h2 class="graph-heading"></h2>');
      $('body').append('<ul class="labels"></ul>');
      $('body').append('<ul class="y-axis"></ul>');
      $('body').append('<ul class="bars"></ul>');

      spyOn(Backbone.Collection.prototype, 'fetch').andReturn(false);

      graph = new GraphView({
        collection: collection
      });
    });

    afterEach(function () {
      $('.graph-heading').remove();
      $('.labels').remove();
      $('.y-axis').remove();
      $('.bars').remove();
    });

    describe("#headingEl", function () {
      it("returns the jQuery-selected graph heading element", function () {
        expect(graph.headingEl()).toEqual($('h2.graph-heading'));
      });
    });

    describe("#renderHeading", function () {
      it("populates the graph heading with the correct query information", function () {
        graph.renderHeading();
        expect($('.graph-heading').text()).toEqual('In 2014, the New York Times published 100 articles containing foo or bar.');
      });
    });

    describe("#renderLabels", function () {
      it("populates the graph labels with the correct query terms", function () {
        graph.renderLabels();

        expect($('.label-0').text()).toEqual('foo');
        expect($('.label-1').text()).toEqual('bar');
      });
    });

    describe("#renderYAxis", function () {
      it("populates the graph's y-axis labels with the correct information", function () {
        graph.renderYAxis();

        expect($('ul.y-axis .label-0').text()).toEqual('100');
        expect($('ul.y-axis .label-1').text()).toEqual('0');
      });
    });

    describe("#renderBars", function () {
      it("populates the graph's bars with the correct count of articles returned by the query for a given term", function () {
        graph.renderBars();

        expect($('ul.bars li.bar-0 a').text()).toEqual('50');
      });
    });
  });
});
