define('collections/times_query_spec', [
  'collections/times_query'
], function(
  TimesQueryCollection
) {

  describe("TimesQueryCollection", function () {
    var collection;

    beforeEach(function () {
      collection = new TimesQueryCollection();
    });

    describe(".url", function () {
      it("points to the correct endpoint", function () {
        expect(collection.url).to.eql('/query');
      });
    });
  });
});
