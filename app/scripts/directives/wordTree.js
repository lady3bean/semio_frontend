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
  
        link: function( scope, element, attrs, $window ) {
          d3Service.d3().then(function(d3) {

            var svg = d3.select(element[0])
                        .append("svg")
                        .style('width', '100%');

            window.onresize = function() {
              scope.$apply();
            };

            scope.$watch('data', function(newVals, oldVals) {
              return scope.render(newVals);
            }, true);

            scope.render = function(data) {
              svg.selectAll('*').remove();

              if (!data) return;

            };
          });
        }  
      };
    }]);
})();