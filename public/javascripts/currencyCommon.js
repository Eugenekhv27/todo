


var currencyApp = angular.module("currencyApp", []);
    currencyApp.controller("currencyController", function ($scope, $http) {
                $scope.check_load = false; 
                $http.get('../getCurrency').then(function(response){     
                $scope.currencyRes = response;
                $scope.check_load = true;                

        });     


    $scope.check_l = function(){
        return $scope.check_load;
    }

});




