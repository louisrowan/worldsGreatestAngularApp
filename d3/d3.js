var app = angular.module('d3App', [])

app.controller('d3Controller', function($scope){

  $scope.animals = [
    {name: 'lion', color: 'red', speed: 3000, active: false},
    {name: 'cheetah', color: 'yellow', speed: 3100, active: false},
    {name: 'panda', color: 'green', speed: 3200, active: false},
    {name: 'tiger', color: 'blue', speed: 2900, active: false}
  ]

  $scope.circleData = []

  $scope.boxesCount = 0

  $scope.boxChecked = function(index){
    let animal = $scope.animals[index]

    if (animal.active) {
      animal.active = false
      let i = $scope.circleData.indexOf(animal)
      $scope.circleData.splice(i, 1)
      $scope.boxesCount -= 1
      remove()
    } else {
      animal.active = true
      $scope.circleData.push(animal)
      $scope.boxesCount += 1
      update()
    }
  }

  var svg = d3.select('#svgDiv')
    .append('svg')
    .attr('height', '100%')
    .attr('width', '100%')
    .attr('position', 'absolute')

  var update = function(){

    var data = $scope.circleData
    console.log(data)

    let g = svg.selectAll('g')
      .data(data, function(d) {
        return data.indexOf(d)
      })
      .enter()
      .append('g')

    d3.selectAll('g').append('circle')
      .attr('r', 20)
      .style('fill', (d) => d.color )
      .attr('cx', 100)
      .attr('cy', (d, i) => {
        console.log(d.name)
        return 100*i + 100 })
  }

  var remove = function(){
    var data = $scope.circleData

    d3.selectAll('g')
      .data(data, function(d) {
        return data.indexOf(d)
      })
      .exit()
      .remove()
  }

    d3.select('#startRace').on('click', function(){
      d3.selectAll('circle')
        .style('transition', (d) => {
          return `cx ${+d.speed}ms ease-out`
        })
        .style('cx', 600)
    })

    d3.select('#resetRace').on('click', function(){
      d3.selectAll('circle')
        .style('transition', '')
        .style('cx', 100)
        .style('transition', (d) => {
          return `cx ${d.speed}ms ease-out`
        })
    })


})


