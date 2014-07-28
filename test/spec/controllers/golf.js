'use strict';

describe('Controller: GolfCtrl', function () {

  // load the controller's module
  beforeEach(module('jsgameApp'));

  var GolfCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GolfCtrl = $controller('GolfCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
