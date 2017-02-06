var app = angular.module('d3App', [])

app.controller('d3Controller', function($scope){

  $scope.first = 1000
  $scope.second = 1500
  $scope.third = 2000

  $scope.animals = [
    {name: 'lion', speed: 2000, active: false},
    {name: 'cheetah', speed: 1000, active: false},
    {name: 'panda', speed: 3000, active: false},
    {name: 'tiger', speed: 4000, active: false}
  ]

$scope.circleData = function(){
  return $scope.animals.filter((a) => {
    return a.active
  })
}

$scope.boxChecked = function(index){
  let animal = $scope.animals[index]
  if (animal.active) {
    animal.active = false
  } else {
    animal.active = true
  }
  console.log(animal.active)
}

var svg = d3.select('#svgDiv')
  .append('svg')
  .attr('height', '100%')
  .attr('width', '100%')
  .attr('position', 'absolute')

var g = svg.selectAll('g')
  .data($scope.circleData)
  .enter()
  .append('g')

var circles = g.append('circle')
  .attr('r', 20)
  .style('fill', 'red')
  .attr('cx', 100)
  .attr('cy', (d, i) => 100*i + 100)


d3.select('#startRace').on('click', function(){
  circles
    .style('transition', (d) => {
      return `cx ${+d.speed}ms ease-out`
    })
    .style('cx', 600)
})

d3.select('#resetRace').on('click', function(){
  console.log('click')
  circles
    .style('transition', '')
    .style('cx', 100)
    .style('transition', (d) => {
      return `cx ${d.speed}ms ease-out`
    })
})


})

