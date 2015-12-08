(function() {
  'use strict';

  angular.module('kct.common')
    // @if NODE_ENV='development'
    .constant('FBURL', 'https://ksp-cool-tools-dev.firebaseio.com')
    // @endif
    // @if NODE_ENV='production'
    .constant('FBURL', 'https://ksp-cool-tools.firebaseio.com')
    // @endif
    // @if NODE_ENV='test'
    .constant('FBURL', 'https://ksp-cool-tools-test.firebaseio.com')
    // @endif
  ;

})();
