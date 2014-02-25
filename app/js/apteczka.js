define(['angular', 'angular-resource', 'angular-route', './filters/badgesFilter', './services/services'],
    function (angular) {
        return angular.module('apteczka', ['ngRoute', 'ngResource', 'badgesFilter', 'services']);
    }
);
