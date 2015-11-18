angular.module('Ecommerce').controller('adminCtrl', function ($scope, productList) {
	$scope.products = productList.data;
	console.log($scope.products);

	$scope.addProductBtn = function () {
		$scope.addProduct = !$scope.addProduct;
	};

	$scope.submitNewProduct = function () {
		$scope.addProduct = false;
	};

	$scope.editProductBtn = function () {
		$scope.editProduct = !$scope.editProduct;
	};
	$scope.updateProductBtn = function () {
		$scope.updateProduct = true;
	};
	$scope.submitUpdatedProduct = function () {
		$scope.updateProduct = false;
	};
});