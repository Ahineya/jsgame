'use strict';

/**
 * @ngdoc function
 * @name jsgameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsgameApp
 */
angular.module('jsgameApp')
    .controller('MainCtrl', function ($scope, $http, levels) {

        $scope.levelsData = [];

        $scope.playing = levels.playing;

        $scope.selectedLevel = {
            'name': 'Level data',
            'description': '<p>Test description</p>',
            'type': 'golf',
            'data': {
                'successed': ['a1', 'b', 'c'],
                'failed': ['1', '2', '3']
            }
        };

        levels.get().then(function(d) {
            levels.data = d;
            $scope.levelsData = levels.data;
        });

       /* $http({method: 'GET', url: '/data/levels.json'})
            .success(function(data){
                $scope.levelsData = data;
            });
*/
        $scope.loadLevel = function(level) {
            $scope.playing = true;
            $scope.selectedLevel = level;
        };

  });
