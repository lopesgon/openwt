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
  }, function(error) {
    console.log("Cannot get boats list.");
  });

  $scope.delete = function(boat) {
    BoatsService.delete(boat.boat_id).then(function(){
      Materialize.toast(boat.boat_name + " deleted.", 4000);
      $scope.boats.splice($scope.boats.indexOf(boat), 1);
    }, function(){
      console.log("Cannot delete boat.");
    });
  };

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

    delete: function(id) {
      return $q(function(resolve, reject){
        $http.delete(API_ENDPOINT.url + '/boats/' + id).then(function(result){
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