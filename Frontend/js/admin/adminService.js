angular.module('Ecommerce')
  .factory('adminService', function ($http) {
    return {
      function() {
        return $http.post('/api/products').then(function (response) {
          return response;
        });
      }
    }
  });