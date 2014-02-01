'use strict';

angular.module('projectnamespace.projectname', [
  // Module dependencies
    'ngResource'
  , 'ngSanitize'
  , 'urby.assets'
  ])
  // Routes configuration
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html'
      , controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });

