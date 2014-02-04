define('models/article_spec', [
  'models/article'
], function(
  Article
) {

  describe("Article", function () {
    var model;

    beforeEach(function () {
      model = new Article();
    });

    it("is a Backbone model", function () {
      expect(model instanceof Backbone.Model).toEqual(true);
    });
  });
});
