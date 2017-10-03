var personController = function ($scope, PersonService, CountryService) {

    $scope.name = "Aca Lukas";
    $scope.profession = "Singer";
    $scope.newMember = PersonService.person;

    $scope.myCountry = CountryService.myCountry;
}

app.controller("PersonController", personController);