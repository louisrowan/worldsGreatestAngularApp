var CalcApp = angular.module('CalcApp', [])

CalcApp.controller('CalcCtrl', function($scope, buttonsFact){
  $scope.buttons = buttonsFact.buttons

  $scope.value = ''
  var firstNum = ''
  var operation = ''
  var current = ''

  $scope.buttonClick = function(index){
    var buttonVal = $scope.buttons[index].val
    console.log('scope=', $scope.value)
    console.log('firstNum=', firstNum)
    console.log('operation=', operation)

    if (buttonVal === 'C') {
      $scope.value = ''
      firstNum = ''
      operation = ''
      current = ''
      return;
    }
    else if (buttonVal === '=') {
      console.log(firstNum, operation, $scope.value)
    }
    else if (typeof(buttonVal) === 'number') {
      if (operation === '') {
        firstNum += buttonVal
      }
      else if (firstNum === $scope.value){
        $scope.value = buttonVal
        return
      }
        $scope.value += buttonVal
        return;
    }
    else {
      if ($scope.value === operation){
        $scope.value = 'error'
      } else {
        firstNum = $scope.value
      }
    }
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