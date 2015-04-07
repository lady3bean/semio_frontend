(function() {
  'use strict';

  angular
    .module('Semio')
    .factory('WordFactory', WordFactory);

  WordFactory.$inject = ['$http', 'ServerUrl'];

  function WordFactory( $http, ServerUrl ) {
    var words = [];

    function getWords() {
      return $http.get(ServerUrl + '/words')
          .then(function(response) {
              angular.copy(response.data, words);
          });
    }

    return {
      words: words,
      getWords: getWords
    };

  }

})();