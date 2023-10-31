var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send('Heres a list of users');
});

module.exports = router;
