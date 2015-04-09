'use strict';

angular
  .module('Semio')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'ContentCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
