var clickMe = function () {
    return {
        restrict: "EA",
        scope: {
            count: "@",
            asd: "@"
        },
        transclude: true,
        template: "<div class='alert' ng-transclude>{{asd}}</div>",
        //templateUrl: "/partials/transcluded.html",
        controller: "ClickMeController"
    };
}

app.directive("clickMe", clickMe);