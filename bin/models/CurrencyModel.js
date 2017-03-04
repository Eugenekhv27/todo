exports.CurrencyModel = function(name2,value2,date2){
	var name = name2, date = date2, value = value2;
	


	this.getName = function(){
		return name;
	}

	this.getDate = function(){
		return date;
	}
	this.getValue = function(){
		return value;
	}

	function setName(name1){
		name = name1;
	}

	function setDate(date1){
		date = date1;
	}

	function setValue(value1){
		value = value1;
	}
	
}


