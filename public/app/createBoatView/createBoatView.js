/**
 * Created by fredericlopesgoncalvesmagalhaes on 03.07.17.
 */
angular.module('starter.createBoatView', [])

.controller('CreateBoatViewCtrl', ['$scope', 'CreateBoatService', function($scope, CreateBoatService) {
  $scope.submit = function(){
    var boat = {
      name: $scope.boatName,
      year: $scope.boatStartYear
    };

    CreateBoatService.add(boat).then(function(boat){
      Materialize.toast('New boat to the list', 4000);
      $scope.boats.push(boat[0]);
    }, function(){
      console.log("Cannot add boat.");
    });
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

$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});