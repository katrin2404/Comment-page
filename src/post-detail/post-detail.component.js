'use strict';

// Register `postDetail` component, along with its associated controller and template
angular.module('postDetail').component('postDetail', {
    templateUrl: 'post-detail/post-detail.template.html',
    controller: 'PostDetailController',
    controllerAs: 'vm'
});
