define(['text!templates/scann-document.html',
        'k/kendo.binder.min'],
function (view) {
  'use strict';

  var vmView1 = kendo.observable({
    init: function (app) {
      this.app = app;
      return this;
    },

    load: function () {
      console.log('Load data for view1');
    },

    launchCamera: function (e) {
      e.preventDefault();
      $('#capture').click();
    }
  });

  return {
    show: function (app) {
      var vm = app.showView('scann-document', view, vmView1).model;
      vm.init(app).load();
    }
  };
});
