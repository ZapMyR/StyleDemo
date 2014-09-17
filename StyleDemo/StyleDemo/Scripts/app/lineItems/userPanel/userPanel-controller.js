function userPanelCtrl($scope) {

    $scope.username = 'Username';
    $scope.subLinks = [
        new SublinkModel('Historie', '/history'),
        new SublinkModel('Account', '/account'),
        new SublinkModel('Ausloggen', '/logout')
    ];

    (function () {
        return $scope;
    })();
}


app.controller('userPanelCtrl', userPanelCtrl);

function SublinkModel(title, link) {
    var self = this;
    self.title = title;
    self.link = link;
    return self;
}