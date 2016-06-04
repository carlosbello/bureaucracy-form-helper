define(['text!templates/view3.html',
        'k/kendo.binder.min'],
function (view) {
  'use strict';

  var vmView1 = kendo.observable({
    init: function (app) {
      this.app = app;
      return this;
    },

    load: function () {
      console.log('Load data for view3');
    }
  });

  return {
    show: function (app) {
      var vm = app.showView('view3', view, vmView1).model;
      vm.init(app).load();
    }
  };
});
