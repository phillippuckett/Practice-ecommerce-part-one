angular.module('Ecommerce')
  .factory('adminService', function ($http) {
    return {
      function() {
        return $http.post('/api/products').then(function (response) {
          return response;
        });
      }
    }
    return {
      function() {
        return $http.delete('/api/produts/:id').then(function(response){
          return response;
        })
      }
    }
    var newProduct = "a";
      return {
      function() {
        return $http.post('/api/produts',{}).then(function(response){
          return response;
        })
      }
    }
  });