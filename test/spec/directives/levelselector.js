'use strict';

describe('Directive: levelSelector', function () {

  // load the directive's module
  beforeEach(module('jsgameApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should have canvas inside', inject(function ($compile) {
    element = angular.element('<level-selector></level-selector>');
    element = $compile(element)(scope);
    expect(element.find('canvas').length).toBe(1);
  }));
});