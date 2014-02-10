define('models/times_query_spec', [
  'models/times_query'
], function(
  TimesQuery
) {

  describe("TimesQuery", function () {
    var model;

    beforeEach(function () {
      model = new TimesQuery();
    });

    it("is a Backbone model", function () {
      expect(model instanceof Backbone.Model).toEqual(true);
    });

    describe("#hyphenatedTerm", function () {
      it("returns the model's term attribute, with all spaces replaced with dashes", function () {
        model.set('term', 'foo bar');
        expect(model.hyphenatedTerm()).toEqual('foo-bar');
      });
    });
  });
});
