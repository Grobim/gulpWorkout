(function() {
  'use strict';

  angular.module('kct.mocks.data.profiles', [
      'kct.profiles'
    ])
    .run([
      'ProfilesRef',
      profilesInjector
    ])
  ;

  function profilesInjector(ProfilesRef) {

    ProfilesRef.set({
      id1 : {
        nickname : 'First'
      },
      id2 : {
        nickname : 'Second'
      }
    });

  }

})();
