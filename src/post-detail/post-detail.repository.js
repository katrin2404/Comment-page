(function () {

    'use strict';

    angular.module('postDetail').factory('PostDetailRepository', PostDetailRepository);

    PostDetailRepository.$inject = ['$http', 'ApiUrls'];

    function PostDetailRepository($http, ApiUrls) {
        return {
            loadDetails,
            loadComments
        };

        function loadDetails(postId) {
            return $http
                .get(`${ApiUrls.baseUrl}/posts/${postId}`)
                .then(response => response.data);
        }

        function loadComments(postId) {
            return $http
                .get(`${ApiUrls.baseUrl}/comments`, {params: {postId}})
                .then(response => response.data);
        }
    }

})();