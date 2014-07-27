'use strict';

/**
 * @ngdoc function
 * @name jsgameApp.controller:GolfCtrl
 * @description
 * # GolfCtrl
 * Controller of the jsgameApp
 */
angular.module('jsgameApp')
  .controller('GolfCtrl', function ($scope) {

        $scope.successedResults = [];
        $scope.failedResults = [];

        $scope.getClass = function($index, checkingType) {
            return $scope[checkingType+'Results'][$index] ? 'success': 'fail' ;
        };

        $scope.testRegexp = function() {

            var regex = new RegExp($scope.regexp);

            $scope.successedResults = $scope.selectedLevel.data.successed.map(function(item) {
                return regex.test(item);
            });

            $scope.failedResults = $scope.selectedLevel.data.failed.map(function(item) {
                return regex.test(item);
            });

        };

        $scope.checkVictory = function() {
            return ($scope.successedResults.reduce(function(prev, next) {return prev ? next : false;}, true)) ;
        };

  });
