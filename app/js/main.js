require.config({

    paths: {
        'domReady': './lib/requirejs/domReady',
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular.min',
        'angular-resource': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-resource.min',
        'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-route.min'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        }
    },

    deps: ['./bootstrap']
});
