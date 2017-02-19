var model = {



	items: [

    {date: "19.02.2017",name:"Позвонить",does:[{check: 'false', name: "Вася"},{check: 'false', name: "Петя"},{check: 'false', name: "Марина"}]},
    {date: "19.02.2017",name:"Позвонить",does:[{check: 'false', name: "Вася"},{check: 'false', name: "Петя"},{check: 'false', name: "Марина"}]},
    {date: "19.02.2017",name:"Список продуктов",does:[{check: 'false', name: "Хлеб"},{check: 'false', name: "Молоко"}]}

    ]

    }




var purchaseApp = angular.module("purchaseApp", []);
    purchaseApp.controller("purchaseController", function ($scope) {
    $scope.list = model;
	$scope.addItem = function () {
		document.getElementsByClassName('addnewmainlist')[0].style.display = 'block';		
		document.getElementsByClassName('addnewmainlist')[0].style.opacity = '1';
		
		
		
    }

    $scope.SetNewItem = function(Iname){
    	console.log(Iname);
    	var datep = new Date()
    	if(String(datep.getMonth()+1).length = 1)
    	{
    		month = '0' + String(datep.getMonth()+1)
    	}else{

    		month = String(datep.getMonth()+1);
    	}

    	var datenow = String(datep.getDate()) + '.' + month + '.' + String(datep.getFullYear())[2] + String(datep.getFullYear())[3] ;
    	$scope.list.items.push({ date: datenow, name: Iname, does:[{check: 'false', name: "Хлеб"}]});
    	document.getElementsByClassName('addnewmainlist')[0].style.transition = '0.5s';
    	document.getElementsByClassName('addnewmainlist')[0].style.opacity = '0.1';
    	function setDisplay(){
    		document.getElementsByClassName('addnewmainlist')[0].style.display = 'none';
    		document.getElementsByClassName('add-input')[0].value = ' ';
    		
    	}
    	setTimeout(setDisplay, 500);

    	
    }

    $scope.SetNewCancel = function(){
    	document.getElementsByClassName('addnewmainlist')[0].style.transition = '0.5s';
    	document.getElementsByClassName('addnewmainlist')[0].style.opacity = '0.1';
    	function setDisplay(){
    		document.getElementsByClassName('addnewmainlist')[0].style.display = 'none';
    	}
    	setTimeout(setDisplay, 500);




    }
});



