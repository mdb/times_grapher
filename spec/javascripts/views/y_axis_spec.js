define('views/y_axis_spec', [
  'views/y_axis',
  'models/times_query',
  'collections/times_query'
], function(
  YAxisView,
  TimesQuery,
  TimesQueryCollection
) {

  describe("YAxisLabelsView", function () {
    var yAxis;

    beforeEach(function () {
      var collection;

      spyOn(Backbone.Collection.prototype, 'fetch');

      collection = new TimesQueryCollection({
        terms: ['foo', 'bar'],
        year: '2014'
      });

      collection.models = [new TimesQuery({
        factors: ['500', '400', '300', '200', '100', '0']
      })];

      $('body').append('<ul class="y-axis"></ul>');

      yAxis = new YAxisView({collection: collection});
    });

    afterEach(function () {
      $('ul.bars').remove();
    });

    describe("#render", function () {
      describe("the list item it renders", function () {
        var items;

        beforeEach(function () {
          yAxis.render();
          items = $('ul.y-axis li');
        });

        describe("how it renders each y-axis label in the graph", function () {
          it("renders the first y-axis label", function () {
            expect($(items[0]).text()).toEqual('500');
            expect($(items[0]).attr('class')).toEqual('label-0');
          });

          it("renders the second y-axis label", function () {
            expect($(items[1]).text()).toEqual('400');
            expect($(items[1]).attr('class')).toEqual('label-1');
          });

          it("renders the third y-axis label", function () {
            expect($(items[2]).text()).toEqual('300');
            expect($(items[2]).attr('class')).toEqual('label-2');
          });

          it("renders the fourth y-axis label", function () {
            expect($(items[3]).text()).toEqual('200');
            expect($(items[3]).attr('class')).toEqual('label-3');
          });

          it("renders the fifth y-axis label", function () {
            expect($(items[4]).text()).toEqual('100');
            expect($(items[4]).attr('class')).toEqual('label-4');
          });

          it("renders the sixth y-axis label", function () {
            expect($(items[5]).text()).toEqual('0');
            expect($(items[5]).attr('class')).toEqual('label-5');
          });
        });
      });
    });
  });
});
