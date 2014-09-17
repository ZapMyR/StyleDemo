function datesCtrl($scope) {
    $scope.template = 'date-partial.html';

    $scope.dates = [
        new DateModel('Sommerfest', '14.09', 'Arnsberg'),
        new DateModel('Sommerfest', '14.09', 'Arnsberg'),
        new DateModel('Sommerfest 2', '15.09', 'Arnsberg')
    ];

    (function () {
        return $scope;
    })();
}


app.controller('datesCtrl', datesCtrl);

function DateModel(title, date, location) {
    var self = this;
    self.title = title;
    self.date = date;
    self.location = location;
    return self;
}