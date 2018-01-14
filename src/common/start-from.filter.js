(function () {

    'use strict';

    //Create filter for pagination
    angular.module('postsList').filter('startFrom', function () {
        return function (input, start) {
            start = +start;
            return input.slice(start);
        }
    })
})();

