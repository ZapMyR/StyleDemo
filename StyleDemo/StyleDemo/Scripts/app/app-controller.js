function appCtrl($scope, $timeout) {

    $scope.lineItems = [];

    $scope.lineItemsBuffer = [
        new LineItemDatesModel(),
        new LineItemDatesModel(),
        new LineItemDatesModel(),
        new LineItemReferencesModel(),
        new LineItemReferencesModel()
    ];

    $scope.pushLineItems = function pushLineItems(index) {
        if (index == null) {
            index = 0;
        }
        var item = $scope.lineItemsBuffer[index];
        $scope.lineItems.push(item);
        if (index < $scope.lineItemsBuffer.length - 1) {
            $timeout(function () { pushLineItems(index + 1); }, 200);
            
        }
    }
} 

app.controller('appCtrl', appCtrl);



// specialized constructors for LineItems

function LineItemDatesModel() {
    return new LineItemModel('Dates', '/Scripts/app/lineItems/dates/date-partial.html', true);
}

function LineItemReferencesModel() {
    return new LineItemModel('References', '/Scripts/app/lineItems/references/reference-partial.html', false);
}


// base constructor for LineItems

function LineItemModel(title, templateBottom, isRightSide) {
    var self = this;
    self.title = title;
    self.templateBottom = templateBottom;
    self.isRightSide = isRightSide;
    self.alignmentClass = isRightSide ? 'lineElementContainerRight' : 'lineElementContainerLeft';
    return self;
}