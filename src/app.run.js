(function () {
    'use strict';

    angular.module('postsApp').run(['$rootScope', function ($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.title = current.$$route.title;
        });
    }]);
})();
