(function() {
  'use strict';

  angular
    .module('requestum2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
