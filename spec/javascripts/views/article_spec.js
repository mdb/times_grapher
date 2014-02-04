define('views/article_spec', [
  'views/article',
  'models/article'
], function(
  ArticleView,
  Article
) {

  describe("ArticleView", function () {
    var article;

    beforeEach(function () {
      article = new ArticleView({
        model: new Article({
          title: 'some headline',
          url: 'some url',
          datePublished: 'some date',
          byline: 'byline',
          snippet: 'snippet'
        })
      });
    });

    describe("#initialize", function () {
      it("properly sets a template property on instantiation of a BarView instance", function () {
        expect(article.template).toBeDefined();
      });
    });

    describe("#render", function () {
      var rendered;

      beforeEach(function () {
        $('body').append('<ul class="articles articles-foo"></ul>');
        rendered = $(article.render())[0];
      });

      afterEach(function () {
        $('ul.articles-foo').remove();
      });

      describe("the list it renders", function () {
        describe("the headline it renders", function () {
          it("has the proper title", function () {
            expect($(rendered).find('h2 a').text()).toEqual('some headline');
          });

          it("is properly linked to the article's permalink", function () {
            expect($(rendered).find('h2 a').attr('href')).toEqual('some url');
          });
        });

        it("has the proper byline", function () {
          expect($(rendered).find('cite').text()).toEqual('byline');
        });

        it("reports the date published", function () {
          expect($(rendered).find('time').text()).toEqual('Published some date');
        });

        it("renders an article snippet", function () {
          expect($(rendered).find('p').text()).toEqual('snippet');
        });
      });
    });
  });
});
