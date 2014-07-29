'use strict';

/**
 * @ngdoc function
 * @name jsgameApp.controller:CrosserCtrl
 * @description
 * # CrosserCtrl
 * Controller of the jsgameApp
 */
angular.module('jsgameApp')
  .controller('CrosserCtrl', function ($scope, levels) {
    $scope.playing = levels.playing;

    $scope.victory = false;

	$scope.input = '';

	$scope.passed = [];

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

	$scope.getClass = function(id) {
		if ($scope.passed.length === 0) {
			return '';
		}

		return $scope.passed[id] ? 'success' : 'fail';

	};

    $scope.testInput = function() {

    	var regexps = $scope.selectedLevel.data.regexps;

    	var res = regexps.map(function(item) {
    		var r = new RegExp(item);
    		return ($scope.input !== '') ? r.test($scope.input) : false;
    	});

    	$scope.passed = res;

    	if (!~res.indexOf(false)) {
    		$scope.victory = true;
    	}

    };

  });
