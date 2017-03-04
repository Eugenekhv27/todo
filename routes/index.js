var express = require('express');
var router = express.Router();
var currency = require('../bin/controllers/CurrencyController')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo List' });
});

router.get('/getCurrency', function(req, res) {
	currency.CurrencyController(function(result){
		res.send(result);
	});
	
});

router.get('/currency', function(req,res){
	res.render('currency', {title: 'Currency Current'})
});

module.exports = router;
