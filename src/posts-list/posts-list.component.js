(function () {

    'use strict';

// Register `postsList` component, along with its associated controller and template
    angular.module('postsList').component('postsList', {
        templateUrl: 'posts-list/posts-list.template.html',
        controller: 'PostsListController',
        controllerAs: 'vm'
    });
})();




