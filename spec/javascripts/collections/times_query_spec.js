define('collections/times_query_spec', [
  'collections/times_query',
  'models/times_query'
], function(
  TimesQueryCollection,
  TimesQuery
) {

  describe("TimesQueryCollection", function () {
    var collection;

    beforeEach(function () {
      collection = new TimesQueryCollection([
        new TimesQuery({
          totalHits: 10,
          factors: 5
        })
      ]);
    });

    describe(".url", function () {
      it("points to the correct endpoint", function () {
        expect(collection.url).toEqual('/query');
      });
    });

    describe("#hits", function () {
      it("returns the number of hits reported in the collection", function () {
        expect(collection.hits()).toEqual(10);
      });
    });

    describe("#factors", function () {
      it("returns the 'factors' property of the first model in the collection", function () {
        expect(collection.factors()).toEqual(5);
      });
    });
  });
});
