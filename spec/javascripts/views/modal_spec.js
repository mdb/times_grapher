define('views/modal_spec', [
  'views/modal',
  'models/times_query',
  'collections/articles',
  'views/articles'
], function(
  ModalView,
  TimesQuery,
  ArticlesCollection,
  ArticlesView
) {

  describe("ModalView", function () {
    var modal;

    beforeEach(function () {
      $('body').append('<div class="modal-container"></div>');

      modal = new ModalView({
        model: new TimesQuery({term: 'foo'})
      });
    });

    afterEach(function () {
      $('.modal-container').remove();
    });

    describe("#initialize", function () {
      it("properly sets a template property on instantiation of a ModalView instance", function () {
        expect(modal.template).toBeDefined();
      });
    });

    describe("#elSelector", function () {
      it("returns the proper jQuery selector string to use in setting the modal instance's $el", function () {
        expect(modal.elSelector()).toEqual('#modal-foo');
      });
    });

    describe(".events", function () {
      it("binds click of the 'Load More' button to load more articles", function () {
        expect(modal.events['click button']).toEqual('loadMore');
      });
    });

    describe(".template", function () {
      describe("the HTML string it renders", function () {
        var template;

        beforeEach(function () {
          template = $(modal.template);
        });

        it("contains the proper root div with the proper id", function () {
          expect(template.attr('id')).toEqual('modal-foo');
        });

        it("contains a 'close' link", function () {
          expect(template.find('a').text()).toEqual('x');
        });

        it("contains an articles list", function () {
          expect(template.find('ul').attr('class')).toEqual('articles-foo articles');
        });
      });
    });

    describe("#modalContainer", function () {
      it("returns the proper jQuery-selected modal container element", function () {
        expect(modal.modalContainer().attr('class')).toEqual('modal-container');
      });
    });

    describe("#render", function () {
      beforeEach(function () {
        spyOn(modal, 'renderArticles');
        modal.render();
      });

      it("appends the template to the modal container", function () {
        expect($('.modal-container').html()).toEqual(modal.template);
      });

      it("renders the articles list", function () {
        expect(modal.renderArticles).toHaveBeenCalled();
      });

      it("properly sets the modal's $el", function () {
        expect(modal.$el).toEqual($('#modal-foo'));
      });
    });

    describe("#renderArticles", function () {
      beforeEach(function () {
        spyOn(ArticlesView.prototype, 'render');
        modal.renderArticles();
      });

      describe("the '.articles' property it declares on the modal", function () {
        it("is an instance of an ArticlesView", function () {
          expect(modal.articles instanceof ArticlesView).toEqual(true);
        });

        it("is instantiated with the modal's articles collection", function () {
          expect(modal.articles.collection).toEqual(modal.articlesCollection);
        });
      });

      it("renders the articles view", function () {
        expect(ArticlesView.prototype.render).toHaveBeenCalled();
      });
    });

    describe("#setUpArticles", function () {
      it("sets up an articles view on the modal instance", function () {
        expect(modal.articles).toBeUndefined();
        modal.setUpArticles();
        expect(modal.articles instanceof ArticlesView).toEqual(true);
      });

      it("sets up an articles collection on the modal instance", function () {
        expect(modal.articlesCollection).toBeUndefined();
        modal.setUpArticles();
        expect(modal.articlesCollection instanceof ArticlesCollection).toEqual(true);
      });
    });
  });
});
