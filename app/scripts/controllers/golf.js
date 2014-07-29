'use strict';

/**
 * @ngdoc function
 * @name jsgameApp.controller:GolfCtrl
 * @description
 * # GolfCtrl
 * Controller of the jsgameApp
 */
angular.module('jsgameApp')
  .controller('GolfCtrl', function ($scope, levels) {

        $scope.successedResults = [];
        $scope.failedResults = [];

        $scope.playing = levels.playing;

        $scope.getClass = function($index, checkingType) {
            if (typeof $scope[checkingType+'Results'][$index] === 'undefined') {
                return '';
            }

            if (checkingType === 'successed') {
                return $scope[checkingType+'Results'][$index] ? 'success': 'fail' ;
            } else {
                return !$scope[checkingType+'Results'][$index] ? 'success': 'fail' ;
            }

        };

        /*rewrite to service*/
        $scope.nextLevel = function(selectedLevel) {

            $scope.successedResults = [];
            $scope.failedResults = [];
            $scope.regexp = '';
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
                levels.playing = false;
                $scope.playing = false; //Add flag to show end of the universe
            }


        };

        $scope.regexp = '';

        $scope.testRegexp = function() {

            var regex = new RegExp($scope.regexp);

            $scope.successedResults = $scope.selectedLevel.data.successed.map(function(item) {
                return $scope.regexp !== '' ? regex.test(item) : false;
            });

            $scope.failedResults = $scope.selectedLevel.data.failed.map(function(item) {
                return $scope.regexp !== '' ? regex.test(item) : true;
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
