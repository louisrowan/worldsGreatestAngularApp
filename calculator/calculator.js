var CalcApp = angular.module('CalcApp', [])

CalcApp.controller('CalcCtrl', function($scope, buttonsFact){
  $scope.buttons = buttonsFact.buttons

  $scope.error = false
  $scope.value = ''
  var firstNum = ''
  var operation = ''

  $scope.buttonClick = function(index){
    var buttonVal = $scope.buttons[index].val

    if ($scope.error) {
      if (buttonVal === 'C') {
      $scope.value = ''
      $scope.error = false
      firstNum = ''
      operation = ''
      }
      return;
    }

    if (buttonVal === 'C') {
      $scope.value = ''
      firstNum = ''
      operation = ''
    }
    else if (buttonVal === '=') {
      if (operation === '+'){
        $scope.value = +firstNum + +$scope.value
      } else if (operation === '-'){
        $scope.value = +firstNum - +$scope.value
      } else if (operation === '*'){
        $scope.value = +firstNum * +$scope.value
      } else {
        $scope.value = +firstNum / +$scope.value
      }
      firstNum = $scope.value
      operation = ''
    }
    else if (typeof(buttonVal) === 'number') {
      if (operation === '') {
        firstNum += buttonVal.toString()
        $scope.value += buttonVal.toString()
      }
      else if (firstNum == $scope.value){
        $scope.value = buttonVal.toString()
      } else {
        $scope.value += buttonVal.toString()
      }
    }
    else {
      if (operation != '' || firstNum === ''){
        $scope.value = 'syntax error!'
        $scope.error = true
      } else {
        operation = buttonVal
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