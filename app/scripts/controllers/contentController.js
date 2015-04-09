(function() {
  'use strict';

  angular
    .module('Semio')
    .controller('ContentCtrl', ['$scope', '$http',
      function($scope, $http) {
        $http({
          method: 'JSONP',
          url: 'http://localhost:3000/words'}).then(function(data, status) {
            var words = data.data.responseData.feed.words;
            var data = [];
          });
  
    }]);

})();