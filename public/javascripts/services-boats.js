angular.module('starter.services-boats', [])

.service('BoatsService', function($q, $http, API_ENDPOINT) {
  return {
    getList: function() {
      return $q(function(resolve, reject){
        $http.get(API_ENDPOINT.url + '/boats').then(function(result){
          if(result.data.success){
            resolve(result.data.boats);
          }else{
            reject();
          }
        });
      });
    },

    add: function(boat) {
      console.log("TODO: BoatsService.add(boat)");
    },

    delete: function(boat) {
      console.log("TODO: BoatsService.delete(boat)");
    }
  };
});
