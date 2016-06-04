/*  */
'use strict';
var express = require('express');
var models = require('../models');

var router = express.Router();

router.get('/tasks', function (req, res) {
  models.Task.findAll().then(function (tasks) {
    res.json(tasks);
  });
});

router.post('/tasks', function (req, res) {
  models.Task.create({
    title: req.body.title
  }).then(function (task) {
    res.json(task);
  });
});

module.exports = router;
