define(['require', 'angular', 'apteczka', 'routes'],
    function (require, ng) {
        'use strict';

        require(['domReady!'], function (document) {
            ng.bootstrap(document, ['apteczka']);
        });
    }
);
