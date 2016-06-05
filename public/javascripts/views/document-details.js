define(['text!templates/document-details.html',
        'k/kendo.binder.min'],
function (view) {
  'use strict';

  var vmDocumentDetails = kendo.observable({
    name: '',
    code: '',

    init: function (app) {
      this.app = app;
      return this;
    },

    load: function (documentCode) {
      var that = this;
      kendo.ui.progress($('#container'), true);
      $.getJSON('/api/documents/' + documentCode, function (results) {
        var doc;
        if (results.length) {
          doc = results[0];
          that.set('code', doc.code);
          that.set('name', doc.name);
          that.set('description', doc.description);
          that.set('url', doc.url);
        }
      }).always(function () {
        kendo.ui.progress($('#container'), false);
      });
    }
  });

  return {
    show: function (app, documentCode) {
      var vm = app.showView('document-details', view, vmDocumentDetails).model;
      vm.init(app).load(documentCode);
    }
  };
});
