'use strict';

angular.module('projectnamespace.projectname')

.directive('example', function () {
  return {
    transclude: true
  , restrict: 'E'
  , link: function (scope, elem, attrs) {
      scope.projectName = attrs.projectName;
    }
  , template: '' +
      'Project name is {{ projectName }}'
  };
});
