function linkStripCtrl($scope) {

    $scope.subLinks = [
        new SublinkModel('Kontakt', '/contact'),
        new SublinkModel('Impressum', '/imprint')
    ];

    (function () {
        return $scope;
    })();
}


app.controller('linkStripCtrl', linkStripCtrl);

function SublinkModel(title, link) {
    var self = this;
    self.title = title;
    self.link = link;
    return self;
}