(function() {
  'use strict';

  var path = require('path'),
      gulp = require('gulp'),
      conf = require('./conf'),

      browserSync = require('browser-sync'),

      $ = require('gulp-load-plugins')();

  gulp.task('preprocess', ['preprocess:dev']);

  gulp.task('preprocess:dev', function() {
    return preprocess();
  });

  gulp.task('preprocess:test', function() {
    return preprocess('test');
  });

  gulp.task('preprocess:prod', function() {
    return preprocess('production');
  });

  gulp.task('scripts-reload', ['preprocess'], function() {
    return buildScripts()
      .pipe(browserSync.stream());
  });

  gulp.task('scripts-reload:test', ['preprocess:test'], function() {
    return buildScripts()
      .pipe(browserSync.stream());
  });

  gulp.task('scripts', ['preprocess'], function() {
    return buildScripts();
  });

  gulp.task('scripts:test', ['preprocess:test'], function() {
    return buildScripts();
  });

  gulp.task('scripts:prod', ['preprocess:prod'], function() {
    return buildScripts();
  });

  function preprocess(target) {
    var context;
    if (target) {
      console.log(target);
      context = {
        context : {
          NODE_ENV: target
        }
      };
    }
    return gulp.src(path.join(conf.paths.src, '/app/**/*.pre.js'))
      .pipe($.preprocess(context))
      .pipe($.rename(function(path) {
        path.basename = path.basename.slice(0, -4);
      }))
      .pipe(gulp.dest(path.join(conf.paths.src, 'app')));
  }

  function buildScripts() {
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
      .pipe($.eslint())
      .pipe($.eslint.format())
      .pipe($.size());
  }

})();
