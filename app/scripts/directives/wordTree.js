(function(){
  'use strict';

  angular
    .module('Semio')
    .directive('wordTree', ['d3Service', function( d3Service ) {

      return {
        restrict: 'EA',
        scope: {
          data: '='
        },
        template: '<div class="word-tree"></div>',
  
        link: function( scope, element, attr ) {
          d3Service.d3().then(function(d3) {

            window.onresize = function() {
              scope.$apply();
            };

            scope.$watch('data', function(newData) {
              scope.render(newData);
            }, true);

            scope.render = function() {

              var width = 900,
                height = 500;

              var color = d3.scale.category20();

              var force = d3.layout.force()
                  .charge(-120)
                  .linkDistance(30)
                  .size([width, height]);

              var svg = d3.select("body").append("svg")
                  .attr("width", width)
                  .attr("height", height);

              d3.json("../../myData.json", function(error, graph) {
                force
                    .nodes(graph.nodes)
                    .links(graph.links)
                    .start();

                var link = svg.selectAll(".link")
                    .data(graph.links)
                  .enter().append("line")
                    .attr("class", "link")
                    .style("stroke-width", function(d) { return Math.sqrt(d.value); });

                var node = svg.selectAll(".node")
                    .data(graph.nodes)
                  .enter().append("circle")
                    .attr("class", "node")
                    .attr("r", 5)
                    .style("fill", function(d) { return color(d.group); })
                    .call(force.drag);

                node.append("title")
                    .text(function(d) { return d.name; });

                force.on("tick", function() {
                  link.attr("x1", function(d) { return d.source.x; })
                      .attr("y1", function(d) { return d.source.y; })
                      .attr("x2", function(d) { return d.target.x; })
                      .attr("y2", function(d) { return d.target.y; });

                  node.attr("cx", function(d) { return d.x; })
                      .attr("cy", function(d) { return d.y; });
                });
              });

            };
          });
        }  
      };
    }]);
})();