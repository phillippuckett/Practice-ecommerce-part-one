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

    this.addProducts = function() {
      return $http.post('/api/products', {}).then(function (response) {
        return response;
      })
    }
  });