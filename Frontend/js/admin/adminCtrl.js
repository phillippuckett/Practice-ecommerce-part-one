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
//submitting new product
		$scope.submitNewProduct = function () {
			adminService.addProduct($scope.product).then(function (response) {
				$scope.getProducts();
			});
			$scope.addProduct = false;
		};
//Editing products
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
				// console.log(response);
				$scope.getProducts();
				// $scope.products.splice($scope.products.indexOf(productId), 1);
			})
		};
	});