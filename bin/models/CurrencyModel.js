 exports.CurrencyModel = function(){
	

	var model = []
	


	this.pushValues = function(nameset,valueset,dateset){
		model.push({name: nameset, value:valueset, date:dateset})
	}
	this.getValues = function(){
		return JSON.stringify(model)
	}
	
}


