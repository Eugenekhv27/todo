var model = {

    ids:1,

	items: [

    ]

    }




var purchaseApp = angular.module("purchaseApp", []);
    purchaseApp.controller("purchaseController", function ($scope, $http) {


 
        
        $http.get('http://127.0.0.1:5984/todo_model/_all_docs').then(function(response){
                
                $scope.model_len = response.data.rows.length

                for (var i = 0; i < $scope.model_len; i++) {
                    var p = i +2;
                    
                    $http.get('http://127.0.0.1:5984/todo_model/' + p ).then(function(data){
                        model.items.push(data.data)

                        
                        
                    });
                        
                    
                }

                

        });      
    
        
    $scope.list = model;

	$scope.addItem = function () {
        var max_id = 0;
        for (var i = 0; i < $scope.list.items.length; i++) {
            
            if($scope.list.items[i]._id > 0){
                max_id = $scope.list.items[i]._id;
            }

            console.log(max_id);
        };
        
		document.getElementsByClassName('addnewmainlist')[0].style.display = 'block';		
		document.getElementsByClassName('addnewmainlist')[0].style.opacity = '1';
		
		
		
    }


    $scope.checkAva = function(){
        if($scope.list.items.length == 0)
        {
            var elem = document.body.getElementsByClassName('left-sidebar')[0]
            elem.classList.remove('col-md-4');
            elem.classList.add('col-md-12');
            return false;
        }else{

            var elem = document.body.getElementsByClassName('left-sidebar')[0]
            if(!elem.classList.contains('col-md-4')){
                elem.classList.remove('col-md-12');
                    elem.classList.add('col-md-4')
            }
            return true;
        }

    }


    
    function showLoad()
    {
        document.getElementById("loader").style.display = 'block';
    }
    function showContent()
    {
        document.getElementsByClassName("maincont")[0].style.display = 'block';
    }
    function hideLoad()
    {
        document.getElementById("loader").style.display = 'none';
    }
    function hideContent()
    {
        document.getElementsByClassName("maincont")[0].style.display = 'none';
    }

    $scope.loadPage = function(){

        //showLoad();        
        setTimeout(showContent, 2000)
        setTimeout(hideLoad, 2000)
    }

    $scope.openAddDo = function () {
        document.getElementsByClassName('does-add-row')[0].style.display = 'block';
        document.getElementsByClassName('does-add-row')[0].style.opacity = '1';
        document.getElementsByClassName('does-add-row')[0].style.value = ' ';       
    }

    

    
    $scope.getTime = function(){
        datee = new Date();
        var minut = String(datee.getMinutes());
        if(String(datee.getMinutes()).lenght == 1)
        {
           minut = '0' +  String(datee.getMinutes())
        }else if(String(datee.getMinutes()).lenght == 2){
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
    	$scope.list.items.push({ _id: $scope.list.ids+1, date: datenow, name: Iname, does:[{check : 'true', name : 'Для удаления этоя записи, добавьте новую', time : '00:00'}]});
        $scope.getDoes($scope.list.ids+1);
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

    $scope.SetDoCancel = function(){
        document.getElementsByClassName('does-add-row')[0].style.transition = '0.5s';   
                document.getElementsByClassName('does-add-row')[0].style.opacity = '0.1';
                function setDisplay(){
                    document.getElementsByClassName('does-add-row')[0].style.display = 'none';       
                }       
                setTimeout(setDisplay,500)

    }

    $scope.test = function(x){
        alert(x);
    }
    
    $scope.setNewDo = function(iden,doName){

        
        for (var i = 0; i < $scope.list.items.length; i++) {

            if($scope.list.items[i]._id == iden){
                
                $scope.list.items[i].does.push({check: 'false', name: doName,time:$scope.getTime()})
                if($scope.list.items[i].does[0].name == "Для удаления этоя записи, добавьте новую")
                {
                    $scope.list.items[i].does.splice(0,1);
                }
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
            elem: [{_id : 0}]
        };
        if(x == undefined || x==NaN || x == '' || x == 0)
        {
            $scope.Doid.elem[0]._id= 2

        }else{
          $scope.Doid.elem[0]._id= x

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
                
                if( $scope.list.items[i]._id == x)
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



