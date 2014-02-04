define('views/bars_spec', [
  'views/bars',
  'models/times_query',
  'collections/times_query'
], function(
  BarsView,
  TimesQuery,
  TimesQueryCollection
) {

  describe("BarsView", function () {
    var bars;

    beforeEach(function () {
      var collection;

      spyOn(Backbone.Collection.prototype, 'fetch');

      collection = new TimesQueryCollection({
        terms: ['foo', 'bar'],
        year: '2014'
      });

      collection.models = [new TimesQuery({
        term: 'foo',
        percent: '50',
        hits: '50'
      }), new TimesQuery({
        term: 'bar',
        percent: '25',
        hits: '40'
      })];

      $('body').append('<ul class="bars"></ul>');

      bars = new BarsView({collection: collection});
    });

    afterEach(function () {
      $('ul.bars').remove();
    });

    describe("#render", function () {
      describe("the list item it renders", function () {
        var items;

        beforeEach(function () {
          bars.render();
          items = $('ul.bars li');
        });

        describe("how it renders each bar in the graph", function () {
          it("renders the first graph label", function () {
            expect($(items[0]).find('a').text()).toEqual('50');
            expect($(items[0]).attr('style')).toEqual('height: 50%;');
            expect($(items[0]).attr('class')).toEqual('bar bar-0');
          });

          it("renders the second bar", function () {
            expect($(items[1]).find('a').text()).toEqual('40');
            expect($(items[1]).attr('style')).toEqual('height: 25%;');
            expect($(items[1]).attr('class')).toEqual('bar bar-1');
          });
        });
      });
    });
  });
});
