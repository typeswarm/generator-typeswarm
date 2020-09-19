'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-typeswarm:package', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/package'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
