(function() {
  'use strict';

  var path = require('path'),
      conf = require('./gulp/conf'),

      _ = require('lodash'),
      wiredep = require('wiredep'),

      pathSrcHtml = [
        path.join(conf.paths.src, '/**/*.html')
      ];

  function listFiles() {
    var wiredepOptions = _.extend({}, conf.wiredep, {
      dependencies    : false,
      devDependencies : true
    });

    var patterns = [path.join(conf.paths.dist, '/scripts/**/vendor-*.js')]
      .concat(wiredep(wiredepOptions).js)
      .concat([
        path.join(conf.paths.dist, '/scripts/**/app-*.js'),
        path.join(conf.paths.src, '/initSpecs.js'),
        path.join(conf.paths.src, '/specsData/**/*.js'),
        path.join(conf.paths.src, '/**/*.spec.js'),
      ])
      .concat(pathSrcHtml);

    var files = patterns.map(function(pattern) {
      return {
        pattern: pattern
      };
    });
    files.push({
      pattern  : path.join(conf.paths.src, '/assets/**/*'),
      included : false,
      served   : true,
      watched  : false
    });
    return files;
  }

  module.exports = function(config) {

    var configuration = {
      files: listFiles(),

      singleRun: true,

      autoWatch: false,

      ngHtml2JsPreprocessor: {
        stripPrefix : conf.paths.src + '/',
        moduleName  : 'kct'
      },

      logLevel: 'WARN',

      frameworks: ['jasmine', 'angular-filesort'],

      angularFilesort: {
        whitelist: [path.join(conf.paths.src, '/**/!(*.html|*.spec|*.mock).js')]
      },

      browsers : [
        'Chrome',
        'Firefox',
        'IE'
      ],

      plugins : [
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-ie-launcher',
        'karma-angular-filesort',
        'karma-coverage',
        'karma-jasmine',
        'karma-ng-html2js-preprocessor'
      ],

      coverageReporter: {
        type : 'html',
        dir : 'coverage/'
      },

      reporters: ['progress'],

      proxies: {
        '/assets/': path.join('/base/', conf.paths.src, '/assets/')
      }
    };

    // This is the default preprocessors configuration for a usage with Karma cli
    // The coverage preprocessor is added in gulp/unit-test.js only for single tests
    // It was not possible to do it there because karma doesn't let us now if we are
    // running a single test or not
    configuration.preprocessors = {};
    pathSrcHtml.forEach(function(path) {
      configuration.preprocessors[path] = ['ng-html2js'];
    });

    // This block is needed to execute Chrome on Travis
    // If you ever plan to use Chrome and Travis, you can keep it
    // If not, you can safely remove it
    // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
    if(configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
      configuration.customLaunchers = {
        'chrome-travis-ci': {
          base: 'Chrome',
          flags: ['--no-sandbox']
        }
      };
      configuration.browsers = ['chrome-travis-ci'];
    }

    config.set(configuration);
  };

})();
