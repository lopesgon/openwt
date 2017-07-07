/**
 * Created by fredericlopesgoncalvesmagalhaes on 03.07.17.
 */
angular.module('starter.createBoatView', [])

.controller('CreateBoatViewCtrl', ['$scope', 'CreateBoatService', '$state', function($scope, CreateBoatService, $state) {

  $scope.submit = function(){
    var boat = {
      name: $scope.boatName,
      year: $scope.boatStartYear
    };
    if(boat.name && boat.year) {
      CreateBoatService.add(boat).then(function(boat) {
        $scope.boats.push(boat[0]);
        Materialize.toast('New boat to the list', 4000);
      }, function(){
        console.log("Cannot add boat.");
      });
    }
  }
}])

.service('CreateBoatService', function($http, $q, API_ENDPOINT){
  return {
    add: function (boat) {
      return $q(function (resolve, reject) {
        $http.post(API_ENDPOINT.url + '/boats', boat).then(function (result) {
          if (result.data.success) {
            resolve(result.data.boat);
          } else {
            reject();
          }
        });
      });
    }
  }
});