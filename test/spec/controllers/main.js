'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('jsgameApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should test something', function () {
    expect(true).toBe(true);
  });
});
