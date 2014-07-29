'use strict';

describe('Directive: levelSelector', function () {

  // load the directive's module
  beforeEach(module('jsgameApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should create level-selector', inject(function ($compile) {
    element = angular.element('<level-selector><canvas></canvas></level-selector>');
    element = $compile(element)(scope);
    expect(element.hasClass('ng-scope')).toBe(true);
  }));
});