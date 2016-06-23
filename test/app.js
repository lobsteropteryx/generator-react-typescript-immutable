'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-react-typescript-immutable:app', function () {
  
  this.timeout(15000);
  
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
        'typings.json',
        'tslint.json',
        'bs-config.json',
        //src files
        'src/app/components/testComponent.tsx',
        'src/app/models/testComponentProps.ts',
        'src/app/index.ts',
        //test files
        'src/test/index.html',
        'src/test/main.ts',
        'src/test/tsconfig.json',
        'src/test/webpack.config.js',
        //spec files
        'src/test/spec/testComponentPropsSpec.ts',
        'src/test/spec/tests.webpack.js',
        'src/test/spec/test-main.js'
    ]);
  });
});
