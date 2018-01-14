(function () {
    'use strict';
    angular.module('postsList').factory('Pagination', Pagination);

    Pagination.$inject = ['$filter'];

    function Pagination($filter) {
        return {
            getData,
            numberOfPages,
        };

        function getData(posts, search) {
            return $filter('filter')(posts, search);
        }

        function numberOfPages(data, pageSize) {
            let pages = Math.ceil(data.length / pageSize);
            return pages === 0 ? 1 : pages;
        }
    }

})();
