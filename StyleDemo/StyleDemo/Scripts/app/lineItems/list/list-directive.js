app.directive('itemList', function ($controller) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@',
            listtemplate: '@',
            listitems: '@'
        },
        templateUrl: 'Scripts/app/lineItems/list/list-partial.html',
        link: function (scope) {
        }
    };
});

app.directive('itemListItem', function ($controller) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@',
            sublink: '@'
        },
        templateUrl: 'Scripts/app/lineItems/list/listItem-partial.html',
        link: function (scope) {
        }
    };
});
