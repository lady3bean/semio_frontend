(function(){
  'use strict';

  angular
    .module('Semio')
    .directive('wordTree', wordTree);

    function wordTree() {
      return {
          restrict: 'E',
          templateUrl: 'templates/wordTree.html',
          scope: {
              words: '='
          },
          controller:  ContentCtrl,
          controllerAs: 'contentCtrl',
          bindToController: true
      };
    }

})();