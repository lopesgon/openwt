/**
 * Created by fredericlopesgoncalvesmagalhaes on 03.07.17.
 */
angular.module('starter.boatsView', [])

.controller('BoatsViewCtrl', ['$scope', 'BoatsService', function($scope, BoatsService) {
  $scope.boats = [];

  var range = [];
  for(var first = 1901, last = new Date().getFullYear(); first <= last; first++){
    range.push(first);
  }
  $scope.years = range;

  BoatsService.getList().then(function(res){
    $scope.boats = res;
  }, function(errMsg) {
    console.log("ERROR HANDLER: " + errMsg);
  });

  $scope.delete = function(boat) {
    BoatsService.delete(boat).then(function(){
      $scope.boats.splice($scope.boats.indexOf(boat), 1);
    }, function(err){
      console.log("ERROR HANDLER ON: " + err);
    });
  };

  $scope.submit = function(){
    var boat = {
      name: $scope.boatName,
      date: undefined,
      voyages: 0,
      poidsTonnes: 1000
    };
    BoatsService.add(boat).then(function(){
      $scope.boats.push({
        name: $scope.boatName,
        date: undefined,
        voyages: 0,
        poidsTonnes: 1000
      });
    }, function(err){
      console.log("ERROR HANDLER ON: " + err);
    });
  }

}])

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
        $http.post(API_ENDPOINT.url + '/boats', boat).then(function(result){
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