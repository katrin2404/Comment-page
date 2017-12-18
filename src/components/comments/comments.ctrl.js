(function () {
  'use strict';

  angular.module("CommentsPageApp").controller("CommentsPageCtrl", function ($scope) {
    let namePage = "The first flight in the world of Angular 1x";
    let noComments = "There are no comments yet.";
    let addMessage = "Add comment";
    let editMessage = "Edit comment";
    let id = 1;

    $scope.commentForm = {};
    $scope.name = namePage;
    $scope.withoutComment = noComments;
    $scope.sendButton = addMessage;
    $scope.comments = [];

    $scope.resetForm = function () {
      $scope.activeComment = {};
      $scope.activeComment.author = '';
      $scope.activeComment.message = '';
      $scope.commentForm.$setPristine();
      $scope.commentForm.$setUntouched();
      $scope.sendButton = addMessage;
    };

    $scope.onSubmit = function (activeComment) {
      if ($scope.commentForm.$invalid) {
        return;
      }
      if ($scope.activeComment.id) {
        $scope.comments = $scope.comments.map(function (comment) {
          if (comment.id === $scope.activeComment.id) {
            comment.author = $scope.activeComment.author;
            comment.message = $scope.activeComment.message;
            comment.updateTime = new Date();
          }
          return comment;
        });
      }
      else {
        $scope.comments.push({
          id: id++,
          author: activeComment.author,
          message: activeComment.message,
          timeToday: new Date()
        });
      }
      $scope.resetForm();
    };

    $scope.editComment = function (comment) {
      $scope.activeComment = angular.copy(comment);
      $scope.sendButton = editMessage;
    };

    $scope.removeComment = function (comment) {
      $scope.comments = $scope.comments.filter(undelComment => undelComment.id !== comment.id);
    };

  });
})();
