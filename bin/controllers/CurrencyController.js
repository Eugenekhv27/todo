var http = require('http');
var c = require('../models/CurrencyModel')
exports.CurrencyController = function(){

	

	var options = {
		host: 'resources.finance.ua',
		path: '/ru/public/currency-cash.json'
	};

	http.get(options, function(resp){
		var str = "";
		resp.on('data', function(chunk){
			str += chunk;

		});
		resp.on("end", function(){
			var response = JSON.parse(str)
			//console.log(response.organizations[0].currencies)
			var arra = ["EUR", "RUR", "USD"];
			var objC = response.organizations[0].currencies[arra[0]];
			var model = new c.CurrencyModel(arra[0], objC.ask, new Date().toLocaleString());
			console.log(model.getName())
			console.log(model.getDate())
			console.log(model.getValue())
		})
	}).on("error",function(e){
		console.log("Got error:" +e.message)
	})


}