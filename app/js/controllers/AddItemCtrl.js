apteczka.controller('AddItemCtrl', function ($scope, $routeParams, $log, $location, ItemREST, UserModel) {
    if (!UserModel.isSignedIn()) {
        $location.path('/');
    }

    $scope.cancel = function () {
        $location.path('/kit');
    }

    $scope.save = function () {
        $log.info('AddItemCtrl SAVE');
        $location.path('/kit');
    }

});
