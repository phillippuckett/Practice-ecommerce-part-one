angular.module('Ecommerce', [])

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('httpRequestInterceptor');

    $urlRouterProvider.otherwise('/home');

    // routing configuration code
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('admin', {
            url: '/admin/',
            templateUrl: 'js/admin/adminTmpl.html',
            controller: 'adminCtrl'
        })
});