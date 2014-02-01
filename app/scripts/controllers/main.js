'use strict';

angular.module('projectnamespace.projectname')

.controller('MainController', function ($scope, ExampleService) {

  $scope.services = ExampleService.getList();
});

