apteczka.controller('AddItemCtrl', function ($scope, $routeParams, $log, $location, ItemREST, UserModel) {
    if (!UserModel.isSignedIn()) {
        $location.path('/');
    }

    $log.info('AddItemCtrl kitId: ' + $routeParams.kitId);
});
