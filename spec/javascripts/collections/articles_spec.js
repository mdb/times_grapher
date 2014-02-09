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
      spyOn(Backbone.Collection.prototype, 'fetch');

      collection = new ArticlesCollection([
        new Article({
          title: 'title',
          url: 'url',
          datePublished: 'datePublished',
          byline: 'byline',
          snippet: 'snippet'
        })
      ], {
        term: 'foo',
        year: 'some year'
      });
    });

    describe("#initialize", function () {
      it("correctly sets the collection instance's 'term' property during instantiation", function () {
        expect(collection.term).toEqual('foo');
      });

      it("correctly sets the collection instance's 'year' property during instantiation", function () {
        expect(collection.year).toEqual('some year');
      });
    });

    describe(".Model", function () {
      it("is set to the Article model", function () {
        expect(collection.model).toEqual(Article);
      });
    });

    describe(".url", function () {
      it("is set to the proper endpoint", function () {
        expect(collection.url).toEqual('/query');
      });
    });

    describe(".pageOffset", function () {
      it("is initially set to 0", function () {
        expect(collection.pageOffset).toEqual(0);
      });
    });

    describe("#fetch", function () {
      it("increments the 'pageOffset' property each time it's called", function () {
        expect(collection.pageOffset).toEqual(0);
        collection.fetch();
        expect(collection.pageOffset).toEqual(1);
        collection.fetch();
        expect(collection.pageOffset).toEqual(2);
      });

      describe("how it fetches data", function () {
        it("fetches data with the proper default options if none are passed", function () {
          collection.fetch({});
          expect(Backbone.Collection.prototype.fetch).toHaveBeenCalledWith({ data : 'terms=foo&year=some+year&page=1' });
        });

        it("fetches data with the proper overriding options if none are passed", function () {
          collection.fetch({term: 'blah', foo: 'bar'});
          expect(Backbone.Collection.prototype.fetch).toHaveBeenCalledWith({ term : 'blah', foo : 'bar', data : 'terms=foo&year=some+year&page=1' });
        });
      });

      describe("#parse", function () {
        it("parses the first object's 'articles' key in the response it's passed", function () {
          expect(collection.parse([{articles: 'foo'}])).toEqual('foo');
        });
      });
    });
  });
});
