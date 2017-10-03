var app = angular.module("MyApp", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {

        //$locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "/partials/person.html",
                controller: "PersonController"
            })
            .otherwise({ redirectTo: '/' });

        //$locationProvider.html5Mode(true);
    });