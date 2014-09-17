var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config([
    '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/equipment', {
            templateUrl: 'Scripts/app/views/equipment-view.html',
            controller: 'equipmentCtrl'
        });
        $routeProvider.when('/', {
            templateUrl: 'Scripts/app/views/main-view.html',
            controller: 'appCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode = true;
    }
]);