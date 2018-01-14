'use strict';

// Register `postDetail` component, along with its associated controller and template
angular.module('postDetail').component('postDetail', {
    templateUrl: 'post-detail/post-detail.template.html',
    controller: ['$http', '$routeParams', '$q',
        function PostDetailController($http, $routeParams, $q) {
            let self = this;
            let root = 'https://jsonplaceholder.typicode.com';

            $q
                .all({
                    post: (function(){return $http.get(root + '/posts/' + $routeParams.postId)})(),
                    comments: (function(){return $http.get(root + '/comments/')})(),
                }).then(function (response) {
                self.post = response.post.data;
                self.post.comments = response.comments.data.filter(function (comment) {
                    return (comment.postId === self.post.id);

                })
            })
        }
    ]
});
