(function () {

    'use strict';
    angular.module('postDetail').controller('PostDetailController', PostDetailController);

    PostDetailController.$inject = ['$routeParams', 'PostDetailService'];

    function PostDetailController($routeParams, PostDetailService) {
        const vm = this;

        init();

        function init() {
            return PostDetailService
                .loadDetailsPost($routeParams.postId)
                .then(post => vm.post = post);
        }


    }
})();