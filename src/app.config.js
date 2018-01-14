(function () {
    'use strict';

    angular.module('postsApp').config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.when('/', {
                template: '<posts-list></posts-list>',
                title: 'List'
            }).when('/Details/:postId', {
                template: '<post-detail></post-detail>',
                title: 'Details'
            }).otherwise('/NotFound');
        }

    ]);

})();



