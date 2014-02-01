define('views/labels_spec', [
  'views/labels',
  'collections/times_query'
], function(
  LabelsView,
  TimesQueryCollection
) {

  describe("LabelsView", function () {
    var labels;

    beforeEach(function () {
      var collection;

      spyOn(Backbone.Collection.prototype, 'fetch');

      collection = new TimesQueryCollection({
        terms: ['foo', 'bar'],
        year: '2014'
      });

      $('body').append('<ul class="labels"></ul>');

      labels = new LabelsView({collection: collection});
    });

    afterEach(function () {
      $('ul.labels').remove();
    });

    describe("#render", function () {
      describe("the list item it renders", function () {
        var items;

        beforeEach(function () {
          labels.render();
          items = $('ul.labels li');
        });

        describe("how it renders each graph label", function () {
          it("renders the first graph label", function () {
            expect($(items[0]).text()).toEqual('foo');
            expect($(items[0]).attr('class')).toEqual('label-0');
          });

          it("renders the second graph label", function () {
            expect($(items[1]).text()).toEqual('bar');
            expect($(items[1]).attr('class')).toEqual('label-1');
          });
        });
      });
    });
  });
});
