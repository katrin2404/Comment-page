(function () {

    'use strict';
    angular.module('postDetail').factory('PostDetailService', PostDetailService);

    PostDetailService.$inject = ['$q', 'PostDetailRepository'];

    function PostDetailService($q, PostDetailRepository) {

        return {
            loadDetailsPost,
        };

        function loadDetailsPost(postId) {

            return $q
                .all({
                    post: PostDetailRepository.loadDetails(postId),
                    comments: PostDetailRepository.loadComments(postId),
                }).then(
                    ({post, comments}) => {

                            console.log({post, comments});
                               return  {
                                    ...post,
                                    comments
                                }
                    }
                );
        }
    }
})();