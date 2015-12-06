(function() {
  'use strict';

  angular
    .module('gulpWorkout')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar(Lalalala) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;
      vm.Lalalala = Lalalala;
      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
