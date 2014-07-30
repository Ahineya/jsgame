'use strict';

/**
 * @ngdoc function
 * @name jsgameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jsgameApp
 */
angular.module('jsgameApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
