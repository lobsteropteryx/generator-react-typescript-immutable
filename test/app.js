'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-react-typescript-immutable:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: "testComponent",
        description: "testDescription"})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      //config files
      'karma.conf.js',
      'package.json',
      'readme.md',
      'tsconfig.json',
      'tsd.json',
      'webpack.config.js',
      //src files
      'src/app/components/testComponent.tsx',
      'src/app/models/testComponentProps.ts',
      'src/app/testComponent.d.ts',
      //test files
      'src/test/index.html',
      'src/test/main.ts',
      'src/test/spec/testComponentPropsSpec.ts'
    ]);
  });
});
