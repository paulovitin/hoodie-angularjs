'use strict';

angular.module('projectnamespace.projectname')

.factory('ExampleService', function () {
  var services = [ 'Bootstrap 3' , 'LESS (css)' , 'JADE template engine' , 'Grunt Tasks' , 'AngularJS' ];

  return {
    getList: function () {
      return services;
    }
  };
});

