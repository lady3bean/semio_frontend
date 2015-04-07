(function() {
  'use strict';

  angular
      .module('Semio')
      .controller('ContentCtrl', ContentCtrl);

  ContentCtrl.$inject = ['WordFactory'];

  function ContentCtrl( WordFactory ) {
      var vm = this;

      vm.words = WordFactory.words;
  }

})();