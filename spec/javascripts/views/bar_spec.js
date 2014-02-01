define('views/bar_spec', [
  'views/bar',
  'models/times_query'
], function(
  BarView,
  TimesQuery
) {

  describe("BarView", function () {
    var bar;

    beforeEach(function () {
      bar = new BarView({
        term: 'foo',
        index: 3,
        model: new TimesQuery({
          term: 'term',
          percent: 50,
          hits: 2
        })
      });
    });

    describe("#initialize", function () {
      it("properly sets a template property on instantiation of a BarView instance", function () {
        expect(bar.template).toBeDefined();
      });

      it("properly sets an index property on instantiation of a BarView instance", function () {
        expect(bar.index).toEqual(3);
      });
    });

    describe("#render", function () {
      describe("the list item it renders", function () {
        var rendered;

        beforeEach(function () {
          rendered = $(bar.render());
        });

        it("has the proper class name", function () {
          expect(rendered.attr('class')).toEqual('bar-3');
        });

        it("has the proper style attribute", function () {
          expect(rendered.attr('style')).toEqual('height: 50%;');
        });

        it("has an anchor tag reporting the count", function () {
          expect(rendered.find('a').text()).toEqual('2');
        });
      });
    });
  });
});
