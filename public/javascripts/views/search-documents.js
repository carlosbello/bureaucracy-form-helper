define(['text!templates/search-documents.html',
        'k/kendo.binder.min'],
function (view) {
  'use strict';

  var vmView1 = kendo.observable({
    documents: [],

    init: function (app) {
      this.app = app;
      return this;
    },

    load: function () {
      var that = this;
      kendo.ui.progress($('#container'), true);
      $.getJSON('/api/documents', function (documents) {
        that.set('documents', documents);
      }).always(function () {
        kendo.ui.progress($('#container'), false);
      });
    }
  });

  return {
    show: function (app) {
      var vm = app.showView('search-documents', view, vmView1).model;
      vm.init(app).load();
    }
  };
});
