angular.module('MyApp', [])
  .controller('MainCtrl', function($scope){
    console.log($scope)
    $scope.world = 'Front End Masters'
    console.log($scope)
  })