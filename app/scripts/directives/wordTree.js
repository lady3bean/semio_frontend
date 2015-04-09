(function(){
  'use strict';

  angular
    .module('Semio')
    .directive('wordTree', ['d3Service', function( d3Service ) {

      return {
        restrict: 'EA',
        scope: {},
        template: '<div class="word-tree"></div>',
  
        link: function( scope, element, attrs, $window ) {
          d3Service.d3().then(function(d3) {

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

              if (!data) return;

            };
          });
        }  
      };
    }]);
})();