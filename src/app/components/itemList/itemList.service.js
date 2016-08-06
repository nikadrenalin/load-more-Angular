(function () {
'use strict';

angular.module('requestum2')
.factory('ItemListService', function (config) {
    var Service = {

        restrictText: function (text) {

            text = text.split(' ');
            text = text.splice(0, config.restrict.description);
            text = text.join(' ');
            text += '...';

            return text;
        },

        // Change value items by restricts
        changeItems: function (items) {

            angular.forEach(items, function(value) {
              
              value.description = Service.restrictText(value.description);

              value.cost = numeral(value.cost).format(config.itemsPriceFormat);

              if (value.discountCost) {
                value.discountCost = numeral(value.discountCost).format(config.itemsPriceFormat);
              }
              
            });

            return items;
        },

        // Checked items data
        checkItemsData: function (data) {

            if (data.hasOwnProperty('entities') && 
              angular.isArray(data.entities) &&
              data.entities.length) {

                return true;
            }

            return false;
        },

        // Add got items in current view
        addItems: function (cur, cash) {

            angular.forEach(cash, function(value) {
              
                cur.push(value);
              
            });

            return cur;
        }

    };

    return Service;
});

})();