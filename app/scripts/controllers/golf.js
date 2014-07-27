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

        $scope.testRegexp = function() {
            var regex = new RegExp($scope.regexp);

            $scope.successedResults = $scope.selectedLevel.map(function(item) {
                return regex.exec(item);
            });

        };
  });
