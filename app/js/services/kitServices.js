var kitServices = angular.module('kitServices', ['ngResource']);

kitServices.factory('KitREST', ['$resource',
    function ($resource) {
        return $resource('data/kit.json');
    }]);
