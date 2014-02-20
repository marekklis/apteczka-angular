apteczka.controller('KitCtrl', function ($scope, $location, UserModel) {
    if (!UserModel.isSignedIn()) {
        $location.path('/');
    }
    $scope.items = [
        {'name': 'Rutinoscorbin',
            'amount': 25},
        {'name': 'Lorinden A',
            'amount': 50},
        {'name': 'Aspirin C',
            'amount': 3}
    ];
});
