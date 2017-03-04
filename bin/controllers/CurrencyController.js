var http = require('http');
var c = require('../models/CurrencyModel')
exports.CurrencyController = function(sendCurrency){

	

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
			var arra = ["EUR", "RUB", "USD"];
			var model = new c.CurrencyModel();
			for (var i = 0; i < arra.length; i++) {
				model.pushValues(arra[i], response.organizations[0].currencies[arra[i]].ask, new Date().toLocaleString() ) 				
			}
			
			var res = model.getValues();
			console.log(res)
			
			sendCurrency(res);

		})
	}).on("error",function(e){
		console.log("Got error:" +e.message)
	})

	

}