(function() {
  'use strict';

  angular.module('kct.components.persistence.saveManager')
    .factory('SaveInclModsRef', ['SaveManagerRef', SaveInclModsRefFactory])
    .factory('SaveInclModRef', ['SaveInclModsRef', SaveInclModRefFactory])
  ;

  function SaveInclModsRefFactory(SaveManagerRef) {
    return SaveManagerRef.child('saveInclMods');
  }

  function SaveInclModRefFactory(SaveInclModsRef) {
    return function(saveId) {
      return SaveInclModsRef.child(saveId);
    };
  }

})();
