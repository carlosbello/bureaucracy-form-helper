define(['text!templates/view1.html',
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
    }
  });

  return {
    show: function (app) {
      var vm = app.showView('view1', view, vmView1).model;
      vm.init(app).load();
    }
  };
});
