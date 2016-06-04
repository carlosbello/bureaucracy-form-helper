define([],
function () {
  'use strict';

  var app = {
    layout: null,
    views: [],
    container: null,
    init: function (container) {
      this.container = container;
      this.layout = new kendo.Layout('<div class="content"></div>', { wrap: false });
      this.layout.render($(container));
    },

    getView: function (name, view, viewModel) {
      if (!this.views[name]) {
        this.views[name] = new kendo.View(view, { model: viewModel, wrap: false });
      }

      return this.views[name];
    },

    showView: function (name, view, viewModel) {
      var $content = $(this.container + ' .content');
      var kendoView = this.getView(name, view, viewModel);

      this.layout.showIn($content, kendoView);
      return kendoView;
    }
  };

  return app;
});
