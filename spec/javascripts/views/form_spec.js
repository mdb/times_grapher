define('views/form_spec', [
  'views/form',
  'routers/app_router'
], function(
  FormView,
  AppRouter
) {

  describe("FormView", function () {
    var form,
        router;

    beforeEach(function () {
      var formMarkup = [
        '<form class="fakeForm">',
          '<input value="foo bar" name="search1" type="text"/>',
          '<input value="baz bim" name="search2" type="text"/>',
          '<select name="year">',
            '<option value="2014" selected="selected">2014</option>',
          '</select>',
          '<input class="submit" type="submit"/>',
        '</form>'
      ];

      $('body').append(formMarkup.join(''));

      router = new AppRouter();

      form = new FormView({
        router: router
      });

      $('body').append('<form></form>')
    });

    afterEach(function () {
      $('form.fakeForm').remove();
    });

    describe("#initialize", function () {
      it("properly sets a router property on instantiation of a FormView instance", function () {
        expect(form.router).toEqual(router);
      });
    });

    describe(".events", function () {
      it("maps click of the submit button to navigate", function () {
        expect(form.events['click .submit']).toEqual('navigate');
      });
    });

    describe("#termOne", function () {
      it("returns the value of the first text input", function () {
        expect(form.termOne()).toEqual('foo bar');
      });
    });

    describe("#termTwo", function () {
      it("returns the value of the first text input", function () {
        expect(form.termTwo()).toEqual('baz bim');
      });
    });

    describe("#year", function () {
      it("returns the value of the selected year option", function () {
        expect(form.year()).toEqual('2014');
      });
    });

    describe("#navigate", function () {
      it("navigates to the proper Backbone route based on the form values", function () {
        spyOn(form.router, 'navigate');

        form.navigate();

        expect(form.router.navigate).toHaveBeenCalled();
      });
    });

    describe("#queryUrl", function () {
      it("returns the correct Backbone route based on the form values", function () {
        expect(form.queryUrl()).toEqual('2014/foo bar/baz bim');
      });
    });
  });
});
