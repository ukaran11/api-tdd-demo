var express = require('express');
var router = express.Router();

const todos = [{id: 1, name: 'Do Something', completed: false}];

// /todos/
router.get('/', function(req, res, next) {
  res.json('respond with a resource');
});


module.exports = router;
