'use strict';

/**
 * @ngdoc function
 * @name jsgameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsgameApp
 */
angular.module('jsgameApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
