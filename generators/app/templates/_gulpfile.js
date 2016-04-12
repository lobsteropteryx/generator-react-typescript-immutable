'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tsProject = tsc.createProject('tsconfig.json'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    Config = require('./gulpfile.config'),
    browserSync = require('browser-sync'),
    superstatic = require( 'superstatic'),
    amdOptimize = require('gulp-amd-optimize'),
    mainBowerFiles = require('main-bower-files'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    runSequence = require('run-sequence'),
    Server = require('karma').Server,
    runner = require('karma').runner
    ;

var config = new Config();

gulp.task('ts-build-app', function () {
    var sourceTsFiles = [
        config.allTypeScript,
        config.libraryTypeScriptDefinitions
    ];

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    tsResult.dts.pipe(gulp.dest(config.out));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.out));
});

gulp.task('ts-build-tests', function () {
    var sourceTsFiles = [
        config.allTypeScript,
        config.libraryTypeScriptDefinitions
    ];

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    tsResult.dts.pipe(gulp.dest(config.out));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.out));
});


gulp.task('watch', function() {
    gulp.watch([config.allTypeScript], ['build']);
});

gulp.task('web-serve', function() {
    browserSync({
        port: 3000,
        server: {
            baseDir: './'
        }
    });
});

gulp.task('browser-watch', function () {
    gulp.watch(['dist/*', 'index.html'], browserSync.reload);
});

gulp.task('default', ['web-serve', 'karma-serve', 'browser-watch', 'watch']);