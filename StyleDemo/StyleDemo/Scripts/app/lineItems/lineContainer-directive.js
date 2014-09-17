app.directive('lineitemcontainer', function ($controller) {
    return {
        restrict: 'E',
        transclude: false,
        scope: {
            title: '@',
            templatetop: '@',
            templatebottom: '@',
            templatemain: '@',
            detailslink: '@',
            alignmentclass: '@',
            controllerused: '@',
            listtemplate: '@',
            listitems: '@'
        },
        templateUrl: 'Scripts/app/lineItems/lineContainer-partial.html',
        link: function (scope) {
        }
    };
});

app.directive('lineitemcontainertop', function ($controller) {
    return {
        restrict: 'E',
        transclude: false,
        scope: {
            title: '@',
            detailslink: '@'
    },
        templateUrl: 'Scripts/app/lineItems/lineContainerTop-partial.html',
        link: function (scope) {

        }
    };
});

app.directive('lineitemcontainerbottom', function ($controller) {
    return {
        restrict: 'E',
        transclude: false,
        scope: {
        },
        templateUrl: 'Scripts/app/lineItems/lineContainerBottom-partial.html',
        link: function (scope) {

        }
    };
});