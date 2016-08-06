(function() {
  'use strict';

  angular
    .module('requestum2')
    .component('itemList', {
      templateUrl: 'app/components/itemList/itemList.html',
      controller: itemListController
    });

    function itemListController($scope, $element, $attrs, ItemListRestService, ItemListService) {
      var ctrl = this,
          page = 1;

       ctrl.items = null;
       ctrl.nextItems = [];
       ctrl.loadItems = function() {

        if (page === 1) {


          ItemListRestService.getItem(page)
          .then(function (data) {
              
              if (ItemListService.checkItemsData(data)) {

                  ctrl.items = ItemListService.changeItems(data.entities);

                  page = ++page;
              }
          })
          .then(function() {
              
              ItemListRestService.getItem(page)
              .then(function (data) {
                  
                  if (ItemListService.checkItemsData(data)) {

                      ctrl.nextItems = ItemListService.changeItems(data.entities);
                  }
              });
          });
        }else {

          if (ctrl.nextItems.length) {
            ctrl.items = ItemListService.addItems(ctrl.items, ctrl.nextItems);
            ctrl.nextItems = [];

            page = ++page;
          }
          
          ItemListRestService.getItem(page)
          .then(function (data) {
              
              if (ItemListService.checkItemsData(data)) {
                
                  ctrl.nextItems = ItemListService.changeItems(data.entities);
              }
          });
        }
      };

      ctrl.items = ctrl.loadItems();
    }

})();