(function() {
    'use strict';

    angular
        .module('Semio', [])
        .run(function(WordFactory) {
            WordFactory.getWords();
        });

    angular.module('Semio')
        .constant('ServerUrl', 'http://localhost:3000');

})();