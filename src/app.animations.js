(function () {

    'use strict';

    angular.module('postsApp').animation('.post', function postAnimationFactory() {
        return {
            addClass: animateIn,
            removeClass: animateOut
        };

        function animateIn(element, className, done) {
            if (className !== 'selected') return;

            element.css({
                display: 'block',
                opacity: 1,
                position: 'absolute',
                width: 0,
                height: 0,
                top: 200,
                left: 200
            }).animate({
                width: 400,
                height: 400,
                top: 0,
                left: 0
            }, done);
        }

        function animateOut(element, className, done) {
            if (className !== 'selected') return;
            element.animate({
                opacity: 0
            }, done);

            return function animateOutEnd(wasCanceled) {
                if (wasCanceled) element.stop();
            };
        }
    });
})();

