'use strict';

/**
 * @ngdoc function
 * @name semioFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the semioFrontendApp
 */
angular.module('semio')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
