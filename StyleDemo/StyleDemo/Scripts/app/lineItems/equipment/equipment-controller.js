function equipmentCtrl($scope) {
    $scope.template = 'equipment-partial.html';

    $scope.equipment = 'Ee qquhip';
    
    $scope.$parent.lineItems = [];

    $scope.$parent.lineItemsBuffer = [
    ];

    function init() {
        $scope.$parent.lineItemsBuffer = [];

       
        $scope.$parent.lineItemsBuffer.push(new LineItemListModel('bySize', false, $scope.bySize, 'Scripts/app/lineItems/list/list-partial.html'));
        $scope.$parent.lineItemsBuffer.push(new LineItemListModel('byCategory', true, $scope.byCategory, 'Scripts/app/lineItems/list/list-partial.html'));

        $scope.$parent.clearLineItems();
        $scope.$parent.pushLineItems();
    }

    $scope.bySize = [
        new SublinkModel('bis 150 Personen', '/equipment/150/'),
        new SublinkModel('bis 500 Personen', '/equipment/500/')
    ];
    $scope.byCategory = [
        new SublinkModel('Lautsprecher', '/equipment/lautsprecher/'),
        new SublinkModel('Verstärker', '/equipment/verstärker/'),
        new SublinkModel('Mikrofone', '/equipment/mikrofone/'),
        new SublinkModel('Mischpulte', '/equipment/mischpulte/'),
        new SublinkModel('DJ', '/equipment/dj/')
    ];
    init();
}


app.controller('equipmentCtrl', equipmentCtrl);


function EquipmentModel() {
    var self = this;
    return self;
}

function SublinkModel(title, link) {
    var self = this;
    self.title = title;
    self.link = link;
    return self;
}