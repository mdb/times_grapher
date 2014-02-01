define('routers/app_router_spec', [
  'routers/app_router'
], function(
  AppRouter
) {

  describe("AppRouter", function () {
    var router;

    beforeEach(function () {
      router = new AppRouter();
    });

    describe(".routes", function () {
      it("properly routes search URLs", function () {
        expect(router.routes[':year/:termOne/:termTwo']).toEqual('renderGraph');
      });
    });
  });
});
