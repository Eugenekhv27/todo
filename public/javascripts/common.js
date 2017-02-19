var model = {

	items: [

	{date: "25.02.17", name: "Покупки", count: 15},
	{date: "23.02.17", name: "Список дел", count: 3},
	{date: "22.02.17", name: "Покупки", count: 8},
	{date: "19.02.17", name: "Сегодня", count: 13},
	{date: "15.02.17", name: "Позвонить", count: 6}

	]
}



var purchaseApp = angular.module("purchaseApp", []);
    purchaseApp.controller("purchaseController", function ($scope) {
    $scope.list = model;
	$scope.addItem = function () {
		var elem = angular.element(document.querySelector(".addnewmainlist"));
		console.log(document.getElementsByClassName('addnewmainlist')[0].style.display = 'block');
    }
});