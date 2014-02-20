apteczka.controller('JumbotronCtrl', function ($scope, $location) {
    $scope.isVisible = function () {
        return $location.path() === '/';
    }
});

apteczka.controller('KitCtrl', function ($scope) {
    $scope.items = [
        {'name': 'Rutinoscorbin',
            'amount': 25},
        {'name': 'Lorinden A',
            'amount': 50},
        {'name': 'Aspirin C',
            'amount': 3}
    ];
});
