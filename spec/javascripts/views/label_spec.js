define('views/label_spec', [
  'views/label',
  'models/times_query'
], function(
  LabelView,
  TimesQuery
) {

  describe("LabelView", function () {
    var label;

    beforeEach(function () {
      label = new LabelView({
        term: 'foo',
        index: 3
      });
    });

    describe("#initialize", function () {
      it("properly sets a template property on instantiation of a LabelView instance", function () {
        expect(label.template).toBeDefined();
      });

      it("properly sets an index property on instantiation of a LabelView instance", function () {
        expect(label.index).toEqual(3);
      });
    });

    describe("#render", function () {
      describe("the list item it renders", function () {
        var rendered;

        beforeEach(function () {
          rendered = $(label.render());
        });

        it("has the proper class name", function () {
          expect(rendered.attr('class')).toEqual('label-3');
        });

        it("reports the proper term", function () {
          expect(rendered.text()).toEqual('foo');
        });
      });
    });
  });
});
