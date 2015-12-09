(function() {
  'use strict';

  angular.module('kct.mocks', [])
    .run(['$window', mockRun])
  ;

  angular.module('kct.mocks.data', [
    'kct.mocks.data.profiles',
    'kct.mocks.data.profilePrivateInfos'
  ]);

  function mockRun($window) {
    $window.MockFirebase.override();
  }

})();
