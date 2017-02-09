var TodosApp = angular.module('TodosApp', ['ngRoute']);



TodosApp.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'TodosCtrl'
    })
    .when('/second', {
      templateUrl: 'pages/second.html',
      controller: 'TodosCtrl'
    })

})

TodosApp.controller('TodosCtrl', ['$scope', 'database', '$log', function($scope, database, $log){

  










  $scope.todosArray = database.todosArray()
  $scope.newTodo = ''

  $scope.addTodo = function(){
    let newTodo = {task: $scope.newTodo, completed: false}
    if (newTodo.task === '') return;
    $scope.todosArray.push(newTodo)
    $scope.newTodo = ''
  }

  $scope.clearCompleted = function(){
    $scope.todosArray = $scope.todosArray.filter(function(t){
      return !t.completed
    })
  }

  $scope.checkboxClick = function(index){
    $scope.todosArray[index].completed = !$scope.todosArray[index].completed
  }

  $scope.deleteTodo = function(index){
    $scope.todosArray.splice(index, 1)
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