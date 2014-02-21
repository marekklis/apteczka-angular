apteczka.controller('ItemCtrl', function ($scope, $routeParams, $location, UserModel) {
    if (!UserModel.isSignedIn()) {
        $location.path('/');
    }

    var items = [
        {id: 'abcd', name: 'Rutinoscorbin', amount: 25, amountType: 'szt.', quantity: 10, badges: ['almost-overdue']},
        {id: '1a3c', name: 'Lorinden A', amount: 50, amountType: 'szt.', quantity: 35},
        {id: '7d4f', name: 'Aspirin C', amount: 3, quantity: 60, badges: ['overdue', 'favorite']},
        {id: 'f6a9', name: 'Elocom', amount: 17, amountType: 'ml'},
        {id: '3ea9', name: 'Chlorchinaldin', amount: 12, amountType: 'ml', quantity: 87, badges: ['favorite']}
    ];

    $scope.item = items.find(function (element) {
        if (element.id === $routeParams.itemId) {
            return element;
        }
    })
});
