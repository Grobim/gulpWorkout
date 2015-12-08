(function() {
  'use strict';

  angular.module('kct.components.ui.breadCrumb')
    .config(['$breadcrumbProvider', BreadCrumbConfig])
  ;

  function BreadCrumbConfig($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      prefixStateName : 'kct.home',
      templateUrl     : 'app/kctMain/components/ui/breadCrumb/breadCrumb.tpl.html'
    });
  }

})();
