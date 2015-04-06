'use strict';

/**
 * @ngdoc function
 * @name semioFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the semioFrontendApp
 */
angular.module('Semio')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
