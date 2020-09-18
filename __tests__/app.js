'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-typeswarm:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      dockerContextDev: 'dev',
      dockerContextProd: 'prod'
    });
  });

  it('creates files', () => {
    assert.file(['tsconfig.json', 'package.json']);
  });
});
