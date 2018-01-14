(function () {

    'use strict';


    angular.module('postsList').factory('PostsListService', PostsListService);

    PostsListService.$inject = ['$q', 'PostsRepository'];

    function PostsListService($q, PostsRepository) {
        console.log(typeof loadPosts);
        return {
            loadPosts,
        };

        function loadPosts() {
            return $q
                .all({
                    posts: PostsRepository.loadList(),
                    users: PostsRepository.loadUsers(),
                }).then(
                    ({posts, users}) =>
                        posts.map(function (post) {
                            post.user = users.find(user => user.id === post.userId
                            );
                            return post;
                        })
                );

        }
    }
})();

