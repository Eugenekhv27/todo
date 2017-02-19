var model = {

    ids:2,

	items: [

    {id: 0,date: "19.02.2017",name:"Позвонить",does:[{check: 'false', name: "Вася",time:"13:08"},{check: 'true', name: "Петя",time:"13:07"},{check: 'true', name: "Марина",time:"13:07"}]},
    {id: 1,date: "19.02.2017",name:"Дела",does:[{check: 'false', name: "Пописать",time:"13:07"},{check: 'false', name: "Покурить",time:"13:07"},{check: 'false', name: "Посрать",time:"13:07"}]},
    {id: 2,date: "19.02.2017",name:"Список продуктов",does:[{check: 'false', name: "Хлеб",time:"13:07"},{check: 'false', name: "Молоко",time:"13:07"}]}

    ]

    }




var purchaseApp = angular.module("purchaseApp", []);
    purchaseApp.controller("purchaseController", function ($scope) {
    $scope.list = model;
	$scope.addItem = function () {
		document.getElementsByClassName('addnewmainlist')[0].style.display = 'block';		
		document.getElementsByClassName('addnewmainlist')[0].style.opacity = '1';
		
		
		
    }

    $scope.OpenDo = function(x){
        alert($scope.list.items[0].id)
    }

    $scope.SetNewItem = function(Iname){
    	
    	var datep = new Date()
    	if(String(datep.getMonth()+1).length = 1)
    	{
    		month = '0' + String(datep.getMonth()+1)
    	}else{

    		month = String(datep.getMonth()+1);
    	}

    	var datenow = String(datep.getDate()) + '.' + month + '.' + String(datep.getFullYear())[2] + String(datep.getFullYear())[3] ;
    	$scope.list.items.push({ id: $scope.list.ids+1, date: datenow, name: Iname, does:[{check: 'false', name: "Хлеб"}]});
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

    $scope.getDoes = function(x){
        var doModel = {
            items:[]
        }

        $scope.currentDo = doModel;
        if(x == undefined || x==NaN || x == '' || x == 0)
        {
            for (var i = 0 ; i < $scope.list.items[0].does.length; i++) {
                $scope.currentDo.items.push({check : $scope.list.items[0].does[i].check, name : $scope.list.items[0].does[i].name, time : $scope.list.items[0].does[i].time})
            };
            
            
            
        }else{
            for (var i = 0 ; i < $scope.list.items.length; i++) {
                console.log($scope.list.items[i].id)
                if( $scope.list.items[i].id == x)
                {
                    for (var j = 0; j < $scope.list.items[i].does.length; j++) {
                        $scope.currentDo.items.push({check : $scope.list.items[i].does[j].check, name : $scope.list.items[i].does[j].name, time : $scope.list.items[i].does[j].time})
                            console.log($scope.list.items[i].does[j].check)
                    };
                    break;
                    
                

                }
                
            }

        }
    }
});



