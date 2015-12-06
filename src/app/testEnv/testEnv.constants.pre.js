(function() {
  'use strict';

  angular.module('testEnv')
    // @if NODE_ENV='development'
    .constant('Lalalala', 'dev')
    // @endif
    // @if NODE_ENV='production'
    .constant('Lalalala', 'prod')
    // @endif
    // @if NODE_ENV='test'
    .constant('Lalalala', 'test')
    // @endif
  ;

})();
