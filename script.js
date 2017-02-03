var MyApp = angular.module('MyApp', []);

MyApp.controller('MainCtrl', function($scope, data){
  $scope.doStuff = data.getStuff
  $scope.func = data.func()
  console.log($scope.doStuff)
  console.log($scope.func)
  $scope.world = 'Front End Masters'
})

MyApp.controller('AltCtrl', function($scope){
  $scope.a = 'bananas'
  $scope.b = 'apples'
  $scope.c = $scope.a
})

MyApp.factory('data', function(){
  var things = [
    {name: "bob", age: 14},
    {name: "mary", age: 20}
  ]

  var func = function(){
    return things
  }

  return {
    getStuff: things,
    func: func
  }
})