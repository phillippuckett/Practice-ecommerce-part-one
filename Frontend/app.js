angular.module('Ecommerce', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise('/home');

    // routing configuration code
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl',
             resolve: {
					productList: function ($http) {
						return $http.get('/api/products').then(function(response){
							return response;
						})
					}
				}
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'js/admin/adminTmpl.html',
            controller: 'adminCtrl',
            resolve: {
					productList: function ($http) {
						return $http.get('/api/products').then(function(response){
							return response.data.data;
						})
					}
				}
        })
});