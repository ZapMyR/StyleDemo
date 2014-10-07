angular.module('app').factory('lineItemsService', lineItemsService);

function lineItemsService($timeout) {
    
    return {
        registerRouteItems: registerRouteItems,
        populate: populate,
        clear: clear
    };

    function init() {
        angular.module('app').value('serviceItems', new []);
        angular.module('app').value('liveItems', new []);
        angular.module('app').value('route', "/");
        angular.module('app').value('timeout', 100);
    }

    init();

    function registerRouteItems(route, items) {
        angular.module('app').value('serviceItems')[route] = items;
    }

    function populate(route) {
        var itemsTemp = angular.module('app').value('serviceItems')[route];
        pushLineItems(itemsTemp);
    }

    function pushLineItems(items, index) {
        if (index == null) {
            index = 0;
        }

        var item = items[index];
        angular.module('app').value('liveItems').push(item);

        if (index < items.length - 1) {
            $timeout(function () {
                pushLineItems(items, index + 1);
            }, timeout);
        }
    }

    function clear() {
        if (angular.module('app').value('liveItems').length > 0) {
            $timeout(function () {
                angular.module('app').value('liveItems').splice(0, 1);
                clear();
            }, timeout);
        }
    }
}