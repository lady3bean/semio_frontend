(function() {
    'use strict';

    angular
        .module('Semio', [
          'ngCookies',
          'ngResource',
          'ngRoute',
          'ngSanitize',
          'ngTouch'])
        .run(function(WordFactory) {
            WordFactory.getWords();
        });

    angular
        .module('Semio')
        .constant('ServerUrl', 'http://localhost:3000');

})();