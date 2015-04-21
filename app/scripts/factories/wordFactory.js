(function() {
  'use strict';

  angular
    .module('Semio')
    .factory('WordFactory', WordFactory);

  WordFactory.$inject = ['$http', 'ServerUrl'];

  function WordFactory( $http, ServerUrl ) {
    var word = [];

    function getWord() {
      return $http.get(ServerUrl + '/words/695')
          .then(function(response) {
              angular.copy(response.data, word);
              console.log(word);
          });
    }

    return {
      word: word,
      getWord: getWord
    };

  }

})();