var express = require('express');
var router = express.Router();
var currency = require('../bin/controllers/CurrencyController')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo List' });
});

router.get('/currency', function(req, res) {
	currency.CurrencyController();
	res.render('index', { title: 'Todo List' });
});

module.exports = router;
