var todoApp = angular.module('todoApp', []);

todoApp.controller('todoController', function($scope) {
  $scope.todos = [{
    text: 'this'
  },
  {
    text: 'that'
  }];
});
