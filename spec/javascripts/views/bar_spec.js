define('views/bar_spec', [
  'views/bar',
  'models/times_query'
], function(
  BarView,
  TimesQuery
) {

  describe("BarView", function () {
    var bar;

    beforeEach(function () {
      bar = new BarView({
        term: 'foo',
        index: 3,
        model: new TimesQuery({
          term: 'term',
          percent: 50,
          hits: 2
        })
      });
    });

    describe("#initialize", function () {
      it("properly sets a template property on instantiation of a BarView instance", function () {
        expect(bar.template).toBeDefined();
      });

      it("properly sets an index property on instantiation of a BarView instance", function () {
        expect(bar.index).toEqual(3);
      });
    });

    describe("#render", function () {
      var rendered;

      beforeEach(function () {
        spyOn(bar, 'renderModal');
        $('body').append('<div class="modal-container"></div>');
        rendered = $(bar.render());
      });

      afterEach(function () {
        $('div.modal-container').remove();
      });

      it("renders the corresponding modal", function () {
        expect(bar.renderModal).toHaveBeenCalled();
      });

      describe("the list item it renders", function () {
        it("has the proper class name", function () {
          expect(rendered.attr('class')).toEqual('bar bar-3');
        });

        it("has the proper style attribute", function () {
          expect(rendered.attr('style')).toEqual('height: 50%;');
        });

        describe("the anchor tag it renders", function () {
          it("reports the count", function () {
            expect(rendered.find('a').text()).toEqual('2');
          });

          it("points to the corresponding modal", function () {
            expect(rendered.find('a').attr('href')).toEqual('#modal-term');
          });
        });
      });
    });

    describe("#renderModal", function () {
      beforeEach(function () {
        $('body').append('<div class="modal-container"></div>');
        bar.renderModal();
      });

      afterEach(function () {
        $('div.modal-container').remove();
      });

      describe("the modal it renders", function () {
        var modal;

        beforeEach(function () {
          modal = $('div.modal-container .modal');
        });

        it("has the proper id", function () {
          expect(modal.attr('id')).toEqual('modal-term');
        });

        it("has a close button", function () {
          expect(modal.find('a').text()).toEqual('x');
        });

        it("has an articles list", function () {
          expect(modal.find('ul.articles').length).toEqual(1);
        });
      });
    });
  });
});
