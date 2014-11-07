'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
 /*
angular
  .module('angularAppApp', [
    'ngAnimate',
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
*/

define(['angularAMD', 'angular-route'], function (angularAMD) {
  var app = angular.module("angularApp", ['ngRoute']);
  app.config(function ($routeProvider) {
    $routeProvider.when("/", 
      angularAMD.route({
        templateUrl: 'views/main.html', 
        controller: 'MainCtrl',
        controllerUrl: 'controllers/main'
    }))
    /*
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerUrl: 'controllers/main.js'      
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });*/
  });
  return angularAMD.bootstrap(app);
});
