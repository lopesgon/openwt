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
      return $q(function(resolve, reject){
        $http.post(API_ENDPOINT.url + '/boats').then(function(result){
          if(result.data.success){
            resolve();
          }else{
            reject();
          }
        });
      });
    },

    delete: function(boat) {
      return $q(function(resolve, reject){
        $http.delete(API_ENDPOINT.url + '/boats/' + boat._id).then(function(result){
          if(result.data.success){
            resolve();
          }else{
            reject();
          }
        });
      });
    }
  };
});
