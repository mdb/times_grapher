define('views/modal_spec', [
  'views/modal',
  'models/times_query',
  'views/articles'
], function(
  ModalView,
  TimesQuery,
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

    describe("#initialize", function () {
      it("properly sets a template property on instantiation of a ModalView instance", function () {
        expect(modal.template).toBeDefined();
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

        it("is instantiated with the modal's model", function () {
          expect(modal.articles.model).toEqual(modal.model);
        });
      });

      it("renders the articles view", function () {
        expect(ArticlesView.prototype.render).toHaveBeenCalled();
      });
    });
  });
});
