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
    $scope.selectedLevel = {
    	"name": "Level data",
        "description": "<p>Test description</p>",
        "type": "golf",
        "data": {
            "successed": ["a", "b", "c"],
            "failed": ["1", "2", "3"]
        }
    };

        $scope.nextLevel = function(selectedLevel) {

            console.log('here');

            var lid = selectedLevel.id;
            /*$scope.levelsData.filter(function(item) {
                return item.id === lid;
            });*/

            var l = $scope.levelsData.length;
            var nextLevelId;
            for (var i = 0; i < l; i++) {
                if ($scope.levelsData[i].id === lid) {
                    nextLevelId = i+1;
                    break;
                }
            }

            console.log(nextLevelId);

            $scope.selectedLevel = $scope.levelsData[nextLevelId];

        };

    $http({method: 'GET', url: '/data/levels.json'})
        .success(function(data){
    	    $scope.levelsData = data;
        });

        $scope.test = function(level) {
            $scope.playing = true;
            $scope.selectedLevel = level;
        };

        //$scope.fil="";

  });
