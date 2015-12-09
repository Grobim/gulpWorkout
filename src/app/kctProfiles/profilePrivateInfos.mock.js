(function() {
  'use strict';

  angular.module('kct.mocks.data.profilePrivateInfos', [
      'kct.profiles'
    ])
    .run([
      'ProfilePrivateInfosRef',
      profilePrivateInfosInjector
    ])
  ;

  function profilePrivateInfosInjector(ProfilePrivateInfosRef) {

    ProfilePrivateInfosRef.set({
      id1 : {
        email : 'FirstMail'
      },
      id2 : {
        email : 'SecondMail'
      }
    });

  }

})();
