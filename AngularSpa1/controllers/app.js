var app = angular.module("MyApp", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {

        //$locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                controller: "PersonController",
                templateUrl: "/partials/person.html"
            })
            .when("/country", {
                controller: "CountryController",
                templateUrl: "/partials/country.html"
            })
            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true/*{
            enabled: true,
            requiredBase: false
        }*/);
    });