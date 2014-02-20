apteczka.controller('SignInCtrl', function ($scope, $location, $log, UserModel) {
    $scope.signIn = function () {
        if ($scope.email && ($scope.email === $scope.password)) {
            UserModel.signIn($scope.email, $scope.password);
            $location.path('/kit');
        } else {
            $log.info('zjebałeś');
        }
    }
});
