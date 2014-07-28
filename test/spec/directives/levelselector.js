'use strict';

describe('Directive: levelSelector', function () {

  // load the directive's module
  beforeEach(module('jsgameApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  /*it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<level-selector></level-selector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the levelSelector directive');
  }));*/
});