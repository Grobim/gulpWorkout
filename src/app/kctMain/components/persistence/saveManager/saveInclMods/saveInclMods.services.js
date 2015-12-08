(function() {
  'use strict';

  angular.module('kct.components.persistence.saveManager')
    .service('SaveInclModsService', ['$intFirebaseObject', 'ModRef', SaveInclModsService])
  ;

  function SaveInclModsService($intFirebaseObject, SaveRef) {
    return {
      addTitleToSaveInclMods : addTitleToSaveInclMods,
      addTitleToSaveInclMod : addTitleToSaveInclMod
    };

    function addTitleToSaveInclMods(saveInclMods) {
      _.forEach(saveInclMods, addTitleToSaveInclMod);
    }

    function addTitleToSaveInclMod(saveInclMod) {
      var modTitle = $intFirebaseObject(new SaveRef(saveInclMod.$id).child('title'));

      modTitle.$watch(function() {
        saveInclMod.$title = modTitle.$value;
      });
    }
  }

})();
