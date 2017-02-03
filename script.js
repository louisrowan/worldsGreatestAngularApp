var TodosApp = angular.module('TodosApp', []);

TodosApp.controller('TodosCtrl', ['$scope', 'database', function($scope, database){
  $scope.todosArray = database.todosArray()
  $scope.newTodo = ''

  $scope.addTodo = function(){
    let newTodo = {task: $scope.newTodo, completed: false}
    $scope.todosArray.push(newTodo)
    $scope.newTodo = ''
  }

  $scope.clearCompleted = function(){
    $scope.todosArray = $scope.todosArray.filter(function(t){
      return !t.completed
    })
  }
}])



TodosApp.factory('database', function(){
  var todos = [
    {task: 'mow lawn', completed: false},
    {task: 'phone call', completed: true},
    {task: 'pay bills', completed: false}
  ]

  var todosArray = function(){
    return todos
  }

  return {
    todosArray: todosArray
  }
})