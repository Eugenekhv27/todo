var model = {

    ids:0,

	items: [
/*
    {id: 0,date: "19.02.2017",name:"Позвонить",does:[{check: 'false', name: "Вася",time:"13:08"},{check: 'true', name: "Петя",time:"13:07"},{check: 'true', name: "Марина",time:"13:07"}]},
    {id: 1,date: "19.02.2017",name:"Дела",does:[{check: 'false', name: "Приготовить",time:"13:07"},{check: 'false', name: "К стоматологу в час ",time:"13:07"},{check: 'true', name: "Настроить компьютер",time:"13:07"},{check: 'false', name: "На пары",time:"13:07"}]},*/
    {id: 0,date: " ",name:"Основные задачи",does:[{check: 'false', name: "Проснутся",time:"13:07"}]}

    ]

    }




var purchaseApp = angular.module("purchaseApp", []);
    purchaseApp.controller("purchaseController", function ($scope) {
    $scope.list = model;
	$scope.addItem = function () {
		document.getElementsByClassName('addnewmainlist')[0].style.display = 'block';		
		document.getElementsByClassName('addnewmainlist')[0].style.opacity = '1';
		
		
		
    }

    $scope.openAddDo = function () {
        document.getElementsByClassName('does-add-row')[0].style.display = 'block';
        document.getElementsByClassName('does-add-row')[0].style.opacity = '1';
        document.getElementsByClassName('does-add-row')[0].style.value = ' ';       
    }

    

    ;
    $scope.getTime = function(){
        datee = new Date();
        var minut = '';
        if(String(datee.getMinutes()).lenght == 1)
        {
           minut = '0' + String(datee.getMinutes())
        }else{
            minut = String(datee.getMinutes())
        }
        return String(datee.getHours()) + ':' + minut 
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
    	$scope.list.items.push({ id: $scope.list.ids+1, date: datenow, name: Iname, does:[{check : 'true', name : 'Для удаления этоя записи, добавьте новую', time : '00:00'}]});
        $scope.list.ids++;
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

    
    $scope.setNewDo = function(iden,doName){
        for (var i = 0; i < $scope.list.items.length; i++) {

            if($scope.list.items[i].id == iden){
                
                $scope.list.items[i].does.push({check: 'false', name: doName,time:$scope.getTime()})
                console.log($scope.list.items[i].does)
                $scope.getDoes(iden);
                document.getElementsByClassName('does-add-row')[0].style.transition = '0.5s';   
                document.getElementsByClassName('does-add-row')[0].style.opacity = '0.1';
                function setDisplay(){
                    document.getElementsByClassName('does-add-row')[0].style.display = 'none';       
                }       
                setTimeout(setDisplay,500)
                

                break;
            }
            
        }
    }

    $scope.getDoes = function(x){
        
        $scope.Doid = {
            elem: [{id : 0}]
        };
        if(x == undefined || x==NaN || x == '' || x == 0)
        {
            $scope.Doid.elem[0].id= 0

        }else{
          $scope.Doid.elem[0].id= x

        }
        var doModel = {
            items:[]
        }

        $scope.currentDo = doModel;
        if(x==undefined || x==NaN || x == '' || x == 0)
        {
            for (var i = 0 ; i < $scope.list.items[0].does.length; i++) {
                $scope.currentDo.items.push({check : $scope.list.items[0].does[i].check, name : $scope.list.items[0].does[i].name, time : $scope.list.items[0].does[i].time})
            };
            
            
            
        }else{
            for (var i = 0 ; i < $scope.list.items.length; i++) {
                
                if( $scope.list.items[i].id == x)
                {
                    for (var j = 0; j < $scope.list.items[i].does.length; j++) {
                        $scope.currentDo.items.push({check : $scope.list.items[i].does[j].check, name : $scope.list.items[i].does[j].name, time : $scope.list.items[i].does[j].time})
                            $scope.list.items[i].does[j].check
                    };
                    break;
                    
                

                }
                
            }

        }
    }
});



