define('views/modal_spec', [
  'views/modal',
  'models/times_query'
], function(
  ModalView,
  TimesQuery
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
          expect(template.find('ul.articles').length).toEqual(1);
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
        modal.render();
      });

      it("appends the template to the modal container", function () {
        expect($('.modal-container').html()).toEqual(modal.template);
      });
    });
  });
});
