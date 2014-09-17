function appCtrl($scope, $timeout, $location) {

    $scope.lineItems = [];

    $scope.lineItemsBuffer = [
        new LineItemDatesModel(),
        new LineItemReferencesModel(),
        new LineItemLinkStripModel(),
        new LineItemUserPanelModel(),
        new LineItemEquipmentModel(),
        new LineItemProductsModel()
    ];

    $scope.pushLineItems = function pushLineItems(index) {
        if (index == null) {
            index = 0;
        }

        var item = $scope.lineItemsBuffer[index];
        $scope.lineItems.push(item);

        if (index < $scope.lineItemsBuffer.length - 1) {
            $timeout(function() {
                 pushLineItems(index + 1);
            }, 100);
        }
    }

    $scope.clearLineItems = function () {
        if ($scope.lineItems.length > 0) {
            $timeout(function () {
                $scope.lineItems.splice(0, 1);
                $scope.clearLineItems();
            }, 50);
        }
    }

    $scope.switchSides = function() {
        for (var i = 0; i < $scope.lineItems.length; i++) {
            $scope.lineItems[i].isRightSide = !$scope.lineItems[i].isRightSide;
        }
    }

    $scope.goto = function(path) {
        $location.path(path);
    }
} 

app.controller('appCtrl', appCtrl);



// specialized constructors for LineItems // detail page

function LineItemListModel(title, isRightSide, items, listTemplate) {
    var self = new LineItemModelTemplateless(title, null, 'Scripts/app/lineItems/list/listContainer-partial.html', null, isRightSide);
    self.listItems = items;
    self.listTemplate = listTemplate;
    return self;
}

// specialized constructors for LineItems // main page

function LineItemDatesModel() {
    return new LineItemModelDefault('Dates', 'datesCtrl', 'Scripts/app/lineItems/dates/dates-partial.html', '#dates', false);
}

function LineItemReferencesModel() {
    return new LineItemModelDefault('Referenzen', 'referencesCtrl', 'Scripts/app/lineItems/references/reference-partial.html', '#references', false);
}

function LineItemEquipmentModel() {
    return new LineItemModelDefault('Equipment', 'equipmentCtrl', 'Scripts/app/lineItems/equipment/equipment-partial.html', '#equipment', true);
}

function LineItemProductsModel() {
    return new LineItemModelDefault('Leistungen', 'productsCtrl', 'Scripts/app/lineItems/products/products-partial.html', '#products', true);
}

function LineItemUserPanelModel() {
    return new LineItemModelTemplateless('User Panel', 'userPanelCtrl', 'Scripts/app/lineItems/userPanel/userPanel-partial.html', '#user', true);
}

function LineItemLinkStripModel() {
    return new LineItemModelTemplateless('Link Strip', 'linkStripCtrl', 'Scripts/app/lineItems/linkStrip/linkStrip-partial.html', null, true);
}


// base constructor for LineItems

function LineItemModel(title, controller, templateBottom, templateTop, detailsLink, isRightSide) {
    var self = this;
    self.title = title;
    self.controllerUsed = controller;
    self.templateMain = 'Scripts/app/lineItems/lineContainer-partial.html';
    self.templateBottom = templateBottom;
    self.templateTop = templateTop;
    self.detailsLink = detailsLink;
    self.isRightSide = isRightSide;
    self.alignmentClass = isRightSide ? 'lineElementContainerRight' : 'lineElementContainerLeft';
    return self;
}

function LineItemModelDefault(title, controller, templateBottom, detailsLink, isRightSide) {
    var self = this;
    self.title = title;
    self.controllerUsed = controller;
    self.templateMain = 'Scripts/app/lineItems/lineContainerDefault-partial.html';
    self.templateBottom = templateBottom;
    self.templateTop = 'Scripts/app/lineItems/lineContainerTop-partial.html';
    self.detailsLink = detailsLink;
    self.isRightSide = isRightSide;
    self.alignmentClass = isRightSide ? 'lineElementContainerRight' : 'lineElementContainerLeft';
    return self;
}

function LineItemModelTemplateless(title, controller, mainTemplate, detailsLink, isRightSide) {
    var self = this;
    self.title = title;
    self.controllerUsed = controller;
    self.templateMain = mainTemplate;
    self.detailsLink = detailsLink;
    self.isRightSide = isRightSide;
    self.alignmentClass = isRightSide ? 'lineElementContainerRight' : 'lineElementContainerLeft';
    return self;
}