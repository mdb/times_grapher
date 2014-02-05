define('collections/articles_spec', [
  'collections/articles',
  'models/article'
], function(
  ArticlesCollection,
  Article
) {

  describe("ArticlesCollection", function () {
    var collection;

    beforeEach(function () {
      collection = new ArticlesCollection([
        new Article({
          title: 'title',
          url: 'url',
          datePublished: 'datePublished',
          byline: 'byline',
          snippet: 'snippet'
        })
      ], {
        term: 'foo'
      });
    });

    describe("#initialize", function () {
      it("correctly sets the collection instance's 'term' property during instantiation", function () {
        expect(collection.term).toEqual('foo');
      });
    });
  });
});
