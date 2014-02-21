apteczka.controller('KitCtrl', function ($scope, $location, UserModel) {
    if (!UserModel.isSignedIn()) {
        $location.path('/');
    }

    function danger() {
        return this.badges && this.badges.indexOf('overdue') >= 0;
    }

    $scope.items = [
        {name: 'Rutinoscorbin', amount: 25, amountType: 'szt.', quantity: 10, badges: ['almost-overdue'], danger: danger},
        {name: 'Lorinden A', amount: 50, amountType: 'szt.', quantity: 35, danger: danger},
        {name: 'Aspirin C', amount: 3, quantity: 60, badges: ['overdue', 'favorite'], danger: danger},
        {name: 'Elocom', amount: 17, amountType: 'ml', danger: danger},
        {name: 'Chlorchinaldin', amount: 12, amountType: 'ml', quantity: 87, badges: ['favorite'], danger: danger}
    ];
});
