var CalcApp = angular.module('CalcApp', [])

CalcApp.controller('CalcCtrl', function($scope, buttonsFact){
  $scope.buttons = buttonsFact.buttons

  $scope.value = ''

  $scope.buttonClick = function(index){
    $scope.value += $scope.buttons[index].val
  }
})

CalcApp.factory('buttonsFact', function(){
  var buttons = [
 
    {val: 1},
    {val: 2},
    {val: 3},
    {val: '+'},
    {val: 4},
    {val: 5},
    {val: 6},
    {val: '-'},
    {val: 7},
    {val: 8},
    {val: 9},
    {val: '*'},
    {val: '='},
    {val: 'C'},
    {val: 0},
    {val: '/'},
  ]

  return {
    buttons: buttons
  }
})