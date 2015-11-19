angular.module('Ecommerce')
.controller('adminCtrl', function ($scope, productList, adminService) {
	$scope.getProducts = function(){
		adminService.getProducts().then(function(response){
			$scope.products = response;
		});
	}
	$scope.products = productList;
	console.log(productList);

	$scope.addProductBtn = function () {
		$scope.addProduct = !$scope.addProduct;
	};

	$scope.submitNewProduct = function () {
		$scope.addProduct = false;
		adminService.addProduct().then(function (response) {
			return
		});
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

	$scope.showReviews = function () {
		$scope.showReview = !$scope.showReview;
	};

	$scope.deleteProduct = function (productId) {
		adminService.deleteProducts(productId).then(function (response) {
			console.log(response);
			$scope.getProducts();
			// $scope.products.splice($scope.products.indexOf(productId), 1);
		})
	};
});