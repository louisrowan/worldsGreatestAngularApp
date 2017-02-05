var app = angular.module('d3App', [])

app.controller('d3Controller', function($scope){

})

var circleData = [
  {name: 'A', speed: 5000},
  {name: 'B', speed: 3000},
  {name: 'C', speed: 1000}
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
  .style('transition', (d) => {
    return `cx ${d.speed}ms ease-out`
  })

d3.select('#startRace').on('click', function(){
  circles
    .style('cx', 600)
})