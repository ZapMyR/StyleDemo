function referencesCtrl($scope) {
    $scope.references = [
        new ReferenceModel('Sommerfest', 'Styles/images/referenzen_1.jpg'),
        new ReferenceModel('Sommerfest 2', 'Styles/images/referenzen_1.jpg')
    ];

    (function () {
        return $scope;
    })();
}


app.controller('referencesCtrl', referencesCtrl);

function ReferenceModel(title, imageUrl) {
    var self = this;
    self.title = title;
    self.imageUrl = imageUrl;
    return self;
}



