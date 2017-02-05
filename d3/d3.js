var app = angular.module('d3App', [])

app.controller('d3Controller', function($scope){

})

var circleData = [
  {name: 'A', speed: 5},
  {name: 'B', speed: 10},
  {name: 'C', speed: 15}
]


var svg = d3.select('#svgDiv')
  .append('svg')
  .attr('height', '100%')
  .attr('width', '100%')
  .attr('position', 'absolute')

var g = svg.selectAll('g')
  .data(circleData)
  .enter()
  .append('g')

var circles = g.append('circle')
  .attr('r', 20)
  .style('fill', 'red')
  .attr('cx', 100)
  .attr('cy', (d, i) => 100*i + 100)