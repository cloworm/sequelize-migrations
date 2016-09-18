var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
  models.Todo.findAll({})
  .then(function(todos) {
    res.send(todos);
  })
  .catch(next);
});

router.post('/', function(req, res, next) {
  models.Todo.create(req.body)
  .then(function(todo) {
    res.send(todo);
  })
  .catch(next);
});

router.get('/:id', function(req, res, next) {
  models.Todo.findById(req.params.id)
  .then(function(todo) {
    res.send(todo);
  })
  .catch(next);
});

router.put('/:id', function(req, res, next) {
  models.Todo.findById(req.params.id)
  .then(function(todo) {
    return todo.update(req.body);
  })
  .then(function(todo) {
    res.send(todo);
  })
  .catch(next);
});

router.delete('/:id', function(req, res, next) {
  models.Todo.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function() {
    res.sendStatus(201);
  })
  .catch(next);
});

module.exports = router;
