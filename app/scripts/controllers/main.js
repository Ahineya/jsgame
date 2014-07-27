'use strict';

/**
 * @ngdoc function
 * @name jsgameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsgameApp
 */
angular.module('jsgameApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.levelsData = [];

        $scope.playing = false;
    $scope.selectedLevel = {};

    $http({method: 'GET', url: '/data/levels.json'}).success(function(data){
    	$scope.levelsData = data;
    }).
    error(function(data) {
    });

        $scope.test = function(level) {
            $scope.playing = true;
            $scope.selectedLevel = level;
        }

        //$scope.fil="";

  });
