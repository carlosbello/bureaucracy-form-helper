define(['text!templates/search-documents.html',
        'k/kendo.binder.min'],
function (view) {
  'use strict';

  var vmView1 = kendo.observable({
    docments: [],

    init: function (app) {
      this.app = app;
      return this;
    },

    load: function () {
      this.set('documents', [
        {code: 'acd-1', name: 'Document One'},
        {code: 'xdd-13', name: 'Document for 13'},
        {code: 'bzgf', name: 'Document buff'}
      ]);
    }
  });

  return {
    show: function (app) {
      var vm = app.showView('search-documents', view, vmView1).model;
      vm.init(app).load();
    }
  };
});
