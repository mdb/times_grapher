define('views/articles_spec', [
  'views/articles',
  'models/article',
  'collections/articles'
], function(
  ArticlesView,
  Article,
  ArticlesCollection
) {

  describe("ArticlesView", function () {
    var articles;

    beforeEach(function () {
      var model = new Article({
            title: 'title',
            url: 'url',
            datePublished: 'datePublished',
            byline: 'byline',
            snippet: 'snippet'
          }),
          collection = new ArticlesCollection([model], {
            term: 'foo'
          });

      $('body').append('<ul class="articles-foo"></ul>');
      articles = new ArticlesView({collection: collection});
    });

    afterEach(function () {
      $('ul.articles-foo').remove();
    });

    describe("#el", function () {
      it("properly sets the 'el' property on instantiation", function () {
        expect(articles.el.className).toEqual('articles-foo');
      });
    });

    describe("#render", function () {
      describe("the list item it renders", function () {
        var items;

        beforeEach(function () {
          articles.render();
          items = $('ul.articles-foo').html();
        });

        describe("how it renders each article in the the model", function () {
          it("renders the headline of each article", function () {
            expect($(items).find('h2 a').text()).toEqual('title');
          });

          it("links to each article's URL", function () {
            expect($(items).find('h2 a').attr('href')).toEqual('url');
          });

          it("renders the date each article was published", function () {
            expect($(items).find('time').text()).toEqual('Published datePublished');
          });

          it("renders the byline for each article", function () {
            expect($(items).find('cite').text()).toEqual('byline');
          });

          it("renders the snippet for each article", function () {
            expect($(items).find('p').text()).toEqual('snippet');
          });
        });
      });
    });
  });
});
