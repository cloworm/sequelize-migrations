var todoApp = angular.module('todoApp', []);

todoApp.controller('todoController', function($scope, todoFactory) {
  todoFactory.getAll()
  .then(function(todos) {
    $scope.todos = todos;
  });

  $scope.deleteTodo = function(id) {
    return todoFactory.deleteTodo(id)
    .then(function() {
      $scope.todos = $scope.todos.filter(function(todo) {
        return todo.id !== id;
      });
    });
  };

  $scope.createTodo = function() {
    console.log($scope.formData);
    return todoFactory.createTodo($scope.formData)
    .then(function(todo) {
      $scope.todos.push(todo);
      $scope.formData.text = '';
      $scope.formData.title = '';
    });
  };

});

todoApp.factory('todoFactory', function($http) {
  var todo = {};
  todo.getAll = function() {
    return $http.get('/api/')
    .then(function(response) {
      return response.data;
    });
  };

  todo.deleteTodo = function(id) {
    return $http.delete('/api/' + id)
    .then(function(response) {
      return response.data;
    });
  };

  todo.createTodo = function(body) {
    return $http.post('/api', body)
    .then(function(response) {
      return response.data;
    });
  };

  return todo;
});
