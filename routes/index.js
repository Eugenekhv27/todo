var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo List' });
});

router.get('/butr', function(req, res, next) {
  res.render('index', { title: 'Todo List', text: 'Виталя Садись и кодььь!!' });
});

module.exports = router;
