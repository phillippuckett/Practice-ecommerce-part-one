angular.module('Ecommerce')
	.controller('adminCtrl', function ($scope, productList, adminService) {
		$scope.getProducts = function () {
			adminService.getProducts().then(function (response) {
				$scope.products = response;
			});
		}
		$scope.products = productList;
		console.log(productList);

		$scope.addProductBtn = function () {
			$scope.addProduct = !$scope.addProduct;
		};
		//Editing products
		$scope.editProductBtn = function () {
			$scope.editProduct = !$scope.editProduct;
		};
		$scope.editProduct = function () {
			$scope.updateProduct = true;
		};

		$scope.showReviews = function () {
			$scope.showReview = !$scope.showReview;
		};
		//submitting new product
		$scope.submitNewProduct = function () {
			adminService.addProduct($scope.product).then(function (response) {
				$scope.getProducts();
			});
			$scope.addProduct = false;
			$scope.product = {};
		};
		//updating products
		$scope.submitUpdatedProduct = function (id) {
			adminService.updateProduct(id, $scope.product).then(function (response) {
				$scope.getProducts();
			});
			$scope.updateProduct = false;
		};
		
		//Deleting products
		$scope.deleteProduct = function (productId) {
			adminService.deleteProducts(productId).then(function (response) {
				// console.log(response);
				$scope.getProducts();
				// $scope.products.splice($scope.products.indexOf(productId), 1);
			})
		};
	});