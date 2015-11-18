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
        return $http.delete('/api/produts').then(function(response){
          return response;
        })
      }
    }
  });