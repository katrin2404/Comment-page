'use strict';

// Register `postsList` component, along with its associated controller and template
angular.module('postsList').component('postsList', {
    templateUrl: 'posts-list/posts-list.template.html',
    controller: ['$http', '$q', '$scope', '$filter',
        function PostsListController($http, $q, $scope, $filter) {
            let self = this;

            self.posts = [];
            $scope.orderProp = 'title';
            $scope.currentPage = 0;
            $scope.pageSize = 10;
            $scope.searchPost = '';

            let root = 'https://jsonplaceholder.typicode.com';

            $scope.getData = function () {
                return $filter('filter')(self.posts, $scope.searchPost);
            };

            $scope.numberOfPages = function () {
                let pages = Math.ceil($scope.getData().length / $scope.pageSize);
                return pages === 0 ? 1 : pages;
            };

            function loadPosts() {
                return $http.get(root + '/posts');
            }

            function loadUsers() {
                return $http.get(root + '/users');
            }

            $q
                .all({
                    posts: loadPosts(),
                    users: loadUsers(),
                }).then(function (result) {
                self.posts = result.posts.data.map(function (post) {
                    post.user = result.users.data.find(function (user) {
                        return user.id === post.userId;
                    });
                    return post;
                });
            })
        }

    ]
});

angular.module('postsList').filter('startFrom', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    }
});

