var MyApp = angular.module('MyApp', []);

MyApp.controller('MainCtrl', function($scope){
    console.log($scope)
    $scope.world = 'Front End Masters'
  })

MyApp.controller('AltCtrl', function($scope){
  $scope.world = 'bananas'
})