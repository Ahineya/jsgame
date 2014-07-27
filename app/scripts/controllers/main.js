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


    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
        'Zalupa'
    ];

    $scope.levelsData = [];

    $http({method: 'GET', url: '/data/levels.json'}).success(function(data){
    	$scope.levelsData = data;
    	console.log(data);
    }).
    error(function(data) {
    	console.log(data);
    });

        //$scope.fil="";

  });
