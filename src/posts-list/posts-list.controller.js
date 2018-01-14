(function () {

    'use strict';
    angular.module('postsList').controller('PostsListController', PostsListController);

    PostsListController.$inject = ['Pagination', 'PostsListService'];

    function PostsListController(Pagination, PostsListService) {
        const vm = this;

        vm.posts = [];
        vm.orderProp = 'title';
        vm.currentPage = 0;
        vm.pageSize = 10;
        vm.searchPost = '';
        vm.getData = Pagination.getData;
        vm.numberOfPages = Pagination.numberOfPages;

        init();

        function init() {
            return PostsListService
                .loadPosts()
                .then(posts => vm.posts = posts);
        }
    }

})();