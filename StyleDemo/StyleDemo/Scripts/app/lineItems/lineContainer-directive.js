app.directive('lineitemcontainer', function ($templateCache) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@',
            template: '@',
            alignmentclass: '@'
        },
        templateUrl: '/Scripts/app/lineItems/lineContainer-partial.html',
        link: function (scope) {

        }
    };
});

app.directive('lineitemcontainertop', function ($templateCache) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        templateUrl: '/Scripts/app/lineItems/lineContainerTop-partial.html',
        link: function (scope) {

        }
    };
});

app.directive('lineitemcontainerbottom', function ($templateCache) {
    return {
        restrict: 'E',
        transclude: false,
        scope: {
        },
        templateUrl: '/Scripts/app/lineItems/lineContainerBottom-partial.html',
        link: function (scope) {

        }
    };
});