require(['app/app',
         'k/kendo.router.min', 'k/kendo.view.min'],
function (app) {
  'use strict';

  var router = new kendo.Router();

  function scannDocument() {
    require(['app/views/scann-document'], function (view) {
      view.show(app);
    });
  }

  function searchDocuments() {
    require(['app/views/search-documents'], function (view) {
      view.show(app);
    });
  }

  function showDocumentDetails(code) {
    require(['app/views/document-details'], function (view) {
      view.show(app, code);
    });
  }

  router.route('/', scannDocument);
  router.route('/scann-document', scannDocument);
  router.route('/search-documents', searchDocuments);
  router.route('/document-details/:code', showDocumentDetails);

  function start() {
    app.init('#container');
    router.start();
  }

  start();
});
