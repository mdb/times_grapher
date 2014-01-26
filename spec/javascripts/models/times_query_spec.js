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
      expect(model instanceof Backbone.Model).to.be(true);
    });
  });
});
