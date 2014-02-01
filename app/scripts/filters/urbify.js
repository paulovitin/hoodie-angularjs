'use strict';

angular.module('projectnamespace.projectname')

.filter('urbify', function () {
  return function (input) {
    return input + 'URBY-fied!';
  };
});

