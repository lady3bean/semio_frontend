(function(){
  'use strict';

  angular
    .module('Semio')
    .directive('wordTree', ['d3Service', function( d3Service ) {

      return {
        restrict: 'EA',
        scope: {},
        template: '<div class="word-tree"></div>',
        // templateUrl: 'views/wordTree.html',
        // scope: { words: '=' },
        // controller:  ContentCtrl,
        // controllerAs: 'contentCtrl',
        // bindToController: true,
        link: function( scope, element, attrs ) {
          d3Service.d3().then(function(d3) {
            var margin = parseInt(attrs.margin) || 20;
            var barHeight = parseInt(attrs.barHeight) || 20;
            var barPadding = parseInt(attrs.barPadding) || 5;

            var svg = d3.select(element[0])
                        .append("svg")
                        .style('width', '100%');

            window.onresize = function() {
              scope.$apply();
            };

            scope.data = [
              {name: "Greg", score: 98},
              {name: "Ari", score: 96},
              {name: 'Q', score: 75},
              {name: "Loser", score: 48}
            ];

            scope.$watch(function() {
              return angular.element($window)[0].innerWidth;
            }, function() {
              scope.render(scope.data);
            });

            scope.render = function(data) {
              svg.selectAll('*').remove();

              // If we don't pass any data, return out of the element
              if (!data) return;

              // setup variables
              var width = d3.select(element[0]).node().offsetWidth - margin,
                  // calculate the height
                  height = scope.data.length * (barHeight + barPadding),
                  // Use the category20() scale function for multicolor support
                  color = d3.scale.category20(),
                  // our xScale
                  xScale = d3.scale.linear()
                    .domain([0, d3.max(data, function(d) {
                      return d.score;
                    })])
                    .range([0, width]);

                  // set the height based on the calculations above
                  svg.attr('height', height);

                  //create the rectangles for the bar chart
                  svg.selectAll('rect')
                    .data(data).enter()
                      .append('rect')
                      .attr('height', barHeight)
                      .attr('width', 140)
                      .attr('x', Math.round(margin/2))
                      .attr('y', function(d,i) {
                        return i * (barHeight + barPadding);
                      })
                      .attr('fill', function(d) { return color(d.score); })
                      .transition()
                        .duration(1000)
                        .attr('width', function(d) {
                          return xScale(d.score);
                        });
            };
          });
        }  
      };
    }]);
})();