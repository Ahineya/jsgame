'use strict';

describe('Controller: CrosserCtrl', function () {

  // load the controller's module
  beforeEach(module('jsgameApp'));

  var CrosserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrosserCtrl = $controller('CrosserCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
