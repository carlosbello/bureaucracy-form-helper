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
      this.set('code', documentCode);
      this.set('name', 'Document name: ' + documentCode);
    }
  });

  return {
    show: function (app, documentCode) {
      var vm = app.showView('document-details', view, vmDocumentDetails).model;
      vm.init(app).load(documentCode);
    }
  };
});
