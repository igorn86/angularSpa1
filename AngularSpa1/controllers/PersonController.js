var personController = function ($scope, PersonService) {

    $scope.name = "Aca Lukas";
    $scope.profession = "Singer";
    $scope.newMember = PersonService.person;
}

app.controller("PersonController", personController);