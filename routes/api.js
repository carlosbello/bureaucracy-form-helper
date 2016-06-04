/*  */
'use strict';
var express = require('express');
var documents = require('../documents');

var router = express.Router();

router.get('/documents', function (req, res) {
  res.json(documents);
});

router.get('/documents/:code', function (req, res) {
  res.json(documents.filter(function (document) {
    return document.code.indexOf(req.params.code) >= 0;
  }));
});

module.exports = router;
