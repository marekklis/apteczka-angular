apteczka.controller('AddItemCtrl', function ($scope, $routeParams, $log, $location, ItemREST, UserModel) {
    if (!UserModel.isSignedIn()) {
        $location.path('/');
    }

    $scope.item = {};

    $scope.cancel = function () {
        $location.path('/kit');
    }

    $scope.save = function () {
        $log.info('AddItemCtrl SAVE ' + JSON.stringify($scope.item));
        $location.path('/kit');
    }

});
