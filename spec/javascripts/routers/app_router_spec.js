define('routers/app_router_spec', [
  'routers/app_router',
  'views/form'
], function(
  AppRouter,
  FormView
) {

  describe("AppRouter", function () {
    var router;

    beforeEach(function () {
      spyOn(AppRouter.prototype, 'bind');
      router = new AppRouter();
    });

    describe("#initialize", function () {
      it("instantiates a form view on instantiation of the router", function () {
        expect(router.form instanceof FormView).toEqual(true);
      });

      it("properly binds events to its dispatcher", function () {
        expect(router.bind).toHaveBeenCalledWith('all', router.dispatch);
      });
    });

    describe("#dispatch", function () {
      it("triggers a 'routeChange' event", function () {
        spyOn($.prototype, 'trigger');

        router.dispatch();

        expect($.prototype.trigger).toHaveBeenCalledWith('routeChange');
      });
    });

    describe(".routes", function () {
      it("properly routes search URLs", function () {
        expect(router.routes[':year/:termOne/:termTwo']).toEqual('renderGraph');
      });
    });
  });
});
