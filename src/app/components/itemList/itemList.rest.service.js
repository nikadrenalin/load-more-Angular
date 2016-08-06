(function () {
'use strict';

angular.module('requestum2')
.factory('ItemListRestService', function ($http, $q, config) {
    var Service = {

        getItem: function (page) {
            var deferred = $q.defer(),
                req = {
                 method: 'GET',
                 url: config.items,
                 params: {
                    'page': page,
                    'per_page': 4
                 }
                };

            $http(req).success(function (response, status, headers, config) {
                
                deferred.resolve(response, status, headers, config);
            }).error(function (response, status, headers, config) {
                
                deferred.reject(response, status, headers, config);
            });

            return deferred.promise;
        }
    };

    return Service;
});

})();