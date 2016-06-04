require(['app/app',
         'k/kendo.router.min', 'k/kendo.view.min'],
function (app) {
  'use strict';

  var router = new kendo.Router();

  function showView1() {
    require(['app/views/view1'], function (view) {
      view.show(app);
    });
  }

  function showView2() {
    require(['app/views/view2'], function (view) {
      view.show(app);
    });
  }

  function showView3() {
    require(['app/views/view3'], function (view) {
      view.show(app);
    });
  }

  function showDocumentDetails(code) {
    require(['app/views/document-details'], function (view) {
      view.show(app, code);
    });
  }

  router.route('/', showView1);
  router.route('/link1', showView1);
  router.route('/link2', showView2);
  router.route('/link3', showView3);
  router.route('/document-details/:code', showDocumentDetails);

  function start() {
    app.init('#container');
    router.start();
  }

  start();
});
