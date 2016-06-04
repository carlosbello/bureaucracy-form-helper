/* global requirejs */
requirejs.config({
  baseUrl: '/javascripts/libs',
  paths: {
    app: '/javascripts',
    jquery: '/bower_components/kendo-ui/js/jquery.min',
    k: '/bower_components/kendo-ui/js',
    templates: '/templates',
    lodash: '/bower_components/lodash/dist/lodash.min'
  },
  shim: {
    k: ['jquery'],
    'jquery.easing': ['jquery']
  },
  waitSeconds: 600
});
