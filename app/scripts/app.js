'use strict';

/**
 * @ngdoc overview
 * @name semioFrontendApp
 * @description
 * # semioFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('semioFrontendApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
