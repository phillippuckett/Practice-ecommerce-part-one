angular.module('Ecommerce').controller('homeCtrl', function($scope, productList){
	$scope.products = productList.data;
	console.log($scope.products);
});