app.controller("CountryController", function ($scope, CountryService) {
    $scope.country = CountryService.myCountry;

});