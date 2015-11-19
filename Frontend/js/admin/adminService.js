angular.module('Ecommerce')
  .service('adminService', function ($http) {

    this.getProducts = function () {
      return $http.get('/api/products').then(function (response) {
        return response.data.data;
 
      });
    }

    this.deleteProducts = function (id) {
      return $http.delete('/api/products/' + id).then(function (response) {
        return response;
      })
    }

    this.addProduct = function(newProductObj) {
      return $http.post('/api/products', newProductObj).then(function (response) {
        return response;
      })
    }
      this.updateProduct = function(id, newProductObj) {
      return $http.put('/api/products/' +id, newProductObj).then(function (response) {
        return response.data.data;
      })
    }
  });