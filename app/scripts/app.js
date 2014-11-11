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
      .when("/about", 
      angularAMD.route({
        templateUrl: 'views/about.html', 
        controller: 'AboutCtrl',
        controllerUrl: 'controllers/about'
      }))
      .otherwise({
        redirectTo: '/'
      });
  });
  return angularAMD.bootstrap(app);
});
