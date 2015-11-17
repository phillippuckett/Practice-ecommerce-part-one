angular.module('Ecommerce').controller('adminCtrl', function($scope, productList){
	$scope.products = productList.data;
	console.log($scope.products);
});