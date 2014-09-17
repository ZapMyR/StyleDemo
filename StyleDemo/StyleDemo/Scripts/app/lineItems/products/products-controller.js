function productsCtrl($scope) {
    $scope.template = 'products-partial.html';

    $scope.dates = [
        new DateModel('Sommerfest', '14.09', 'Arnsberg'),
        new DateModel('Sommerfest 2', '15.09', 'Arnsberg')
    ];

    (function () {
        return $scope;
    })();
}


app.controller('productsCtrl', productsCtrl);

function ProductsModel() {
    var self = this;
    return self;
}