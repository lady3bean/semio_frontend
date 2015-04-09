(function() {
  'use strict';

  angular
    .module('Semio')
    .controller('ContentCtrl', ['$scope', '$http',
      function($scope, $http) {
        var data = [];
        var words = [];

        $http.get('http://localhost:3000/words')
          .then(function(response) {
            angular.copy(response.data, words);
            data.push(words);
            $scope.data = data;
        });
      }]);
})();