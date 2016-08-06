/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('requestum2')
    .constant('malarkey', malarkey)
    .constant('moment', moment)

    .constant('config', {
      items: 'http://localhost.jobtestrequestum/server/list.php',
      restrict: {description: 15},
      itemsPriceFormat: '0,0.00'
    });

})();
