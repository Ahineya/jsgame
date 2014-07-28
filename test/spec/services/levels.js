'use strict';

describe('Service: levels', function () {

  // load the service's module
  beforeEach(module('jsgameApp'));

  // instantiate service
  var levels;
  beforeEach(inject(function (_levels_) {
    levels = _levels_;
  }));

  it('should do something', function () {
    expect(!!levels).toBe(true);
  });

});
