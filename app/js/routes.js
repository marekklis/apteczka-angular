define(['apteczka', 'controllers/SignInCtrl', 'controllers/JumbotronCtrl', 'controllers/KitCtrl', 'controllers/ItemCtrl', 'controllers/AddItemCtrl', 'controllers/EditItemCtrl'],
    function (apteczka) {

        var apteczkaConfig = function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'view/landing.html'
                })
                .when('/kit', {
                    controller: 'KitCtrl',
                    templateUrl: 'view/kit.html'
                })
                .when('/item/:itemId', {
                    controller: 'ItemCtrl',
                    templateUrl: 'view/item.html'
                })
                .when('/kit/:kitId/add', {
                    controller: 'AddItemCtrl',
                    templateUrl: 'view/addOrEditItem.html'
                })
                .when('/item/:itemId/edit', {
                    controller: 'EditItemCtrl',
                    templateUrl: 'view/addOrEditItem.html'
                })
            ;
        };
        return apteczka.config(apteczkaConfig);
    });
