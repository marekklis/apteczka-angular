apteczka.controller('KitCtrl', function ($scope, $location, UserModel) {
    if (!UserModel.isSignedIn()) {
        $location.path('/');
    }

    function danger() {
        return this.badges && this.badges.indexOf('overdue') >= 0;
    }

    $scope.items = [
        {'name': 'Rutinoscorbin', 'amount': 25, quantity: 10, badges: ['almost-overdue'], danger: danger},
        {'name': 'Lorinden A', 'amount': 50, quantity: 35, danger: danger},
        {'name': 'Aspirin C', 'amount': 3, quantity: 60, badges: ['overdue', 'favorite'], danger: danger},
        {'name': 'Elocom', 'amount': 17, danger: danger},
        {'name': 'Chlorchinaldin', 'amount': 12, quantity: 87, badges: ['favorite'], danger: danger}
    ];
});
