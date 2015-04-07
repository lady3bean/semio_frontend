(function() {
  'use strict';

  angular
    .module('Semio', [])
    .constant('ServerUrl', 'http://localhost:3000')
    .run(function(WordFactory) {
        WordFactory.getWords();
    });
})();