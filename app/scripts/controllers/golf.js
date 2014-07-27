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
            if (typeof $scope[checkingType+'Results'][$index] === 'undefined') {
                return '';
            }
            return $scope[checkingType+'Results'][$index] ? 'success': 'fail' ;
        };

        $scope.nextLevel = function(selectedLevel) {

            $scope.successedResults = [];
            $scope.failedResults = [];
            $scope.regex = '';
            $scope.victory = false;

            var lid = selectedLevel.id;

            var l = $scope.levelsData.length;
            var nextLevelId;
            for (var i = 0; i < l; i++) {
                if ($scope.levelsData[i].id === lid) {
                    nextLevelId = i+1;
                    break;
                }
            }

            if (typeof $scope.levelsData[nextLevelId] !== 'undefined') {
                $scope.selectedLevel = $scope.levelsData[nextLevelId];
            } else {
                $scope.playing = false; //Add flag to show end of the universe
            }


        };

        $scope.regexp = '';

        $scope.testRegexp = function() {

            var regex = new RegExp($scope.regexp);

            $scope.successedResults = $scope.selectedLevel.data.successed.map(function(item) {
                return regex.test(item);
            });

            $scope.failedResults = $scope.selectedLevel.data.failed.map(function(item) {
                return regex.test(item);
            });

            $scope.victory = ($scope.successedResults.indexOf(false) < 0) && ($scope.failedResults.indexOf(true) < 0);

        };

        /*$scope.checkVictory = function() {

            console.log($scope.regexp);

            if ( (typeof $scope.regexp === 'undefined') || ($scope.regexp.length < 1)) {
                return false;
            }

            var res = ($scope.successedResults.indexOf(false) < 0) && ($scope.failedResults.indexOf(true) < 0);

            console.log(res);

            return $scope.successedResults.length === 0 ? false : res;

        };*/

  });
