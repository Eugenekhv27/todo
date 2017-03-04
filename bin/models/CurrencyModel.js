exports.CurrencyModel = function(name2,value2,date2){
	var name = name2, date = date2, value = value2;
	console.log(name)


	function getName(){
		return name;
	}

	function getDate(){
		return date;
	}
	function getValue(){
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


