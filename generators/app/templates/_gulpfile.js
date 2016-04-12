'use strict';

var gulp = require('gulp');
//debug = require('gulp-debug'),
//inject = require('gulp-inject'),
var tsc = require('gulp-typescript');

//tslint = require('gulp-tslint'),
var sourcemaps = require('gulp-sourcemaps');
//del = require('del'),
//Config = require('./gulpfile.config'),
//browserSync = require('browser-sync'),
//superstatic = require('superstatic'),
//amdOptimize = require('gulp-amd-optimize'),
//mainBowerFiles = require('main-bower-files'),
//concat = require('gulp-concat'),
//uglify = require('gulp-uglify'),
//runSequence = require('run-sequence'),
//Server = require('karma').Server,
//runner = require('karma').runner
//;

var tsConfig = tsc.createProject('tsconfig.json');
var typeScriptDefinitions = "./typings/**/*.ts";
var appTypeScript = "./src/app/**/*.*";
var testTypeScript = "./src/test/**/*.*";
var dist = "./dist";


gulp.task('ts-build-app', function () {
  return gulp.src([appTypeScript,typeScriptDefinitions])
    .pipe(sourcemaps.init())
    .pipe(tsc(tsConfig))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist));


  //tsResult.dts.pipe(gulp.dest(config.out));
  //return tsResult.js
  //  .pipe(sourcemaps.write('.'))
  //  .pipe(gulp.dest(config.out));
});

gulp.task('ts-build-tests', function () {
  return gulp.src([testTypeScript,typeScriptDefinitions])
    .pipe(sourcemaps.init())
    .pipe(tsc({
      "module": "amd",
      "noImplicitAny": true,
      "target": "ES5",
      "jsx": "react",
      "sourceMap": true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist));
});
//
//
//gulp.task('watch-app', function () {
//  gulp.watch([appTypeScript], ['ts-build-app']);
//});
//
//gulp.task('web-serve', function () {
//  browserSync({
//    port: 3000,
//    server: {
//      baseDir: './'
//    }
//  });
//});
//
//gulp.task('browser-watch', function () {
//  gulp.watch(['dist/*', 'index.html'], browserSync.reload);
//});
//
//gulp.task('default', ['web-serve', 'karma-serve', 'browser-watch', 'watch']);
