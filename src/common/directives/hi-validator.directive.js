(function () {
  'use strict';
  angular.module("CommentsPageApp").directive('hiValid', function () {
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        ctrl.$validators['hi-valid'] = function (modelValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }
          if (modelValue.toLowerCase().indexOf(attrs.hiValid.toLowerCase()) < 0) {
            return false;
          }
          return true;
        };
      },
    };
  });
})();
