'use strict';

/**
 * @ngdoc service
 * @name jsgameApp.levels
 * @description
 * # levels
 * Service in the jsgameApp.
 */
angular.module('jsgameApp')
    .service('levels', function levels($http) {

        var levelsData = {
            data: [],
            get: function() {
                var promise = $http.get('data/levels.json').then(function (response) {
                    return response.data;
                });
                return promise;
            },
            playing: false
        };
        return levelsData;

  });