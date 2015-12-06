(function() {
  'use strict';

  angular
    .module('gulpWorkout')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
