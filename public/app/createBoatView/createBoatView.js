/**
 * Created by fredericlopesgoncalvesmagalhaes on 03.07.17.
 */
angular.module('starter.createBoatView', [])

.controller('CreateBoatViewCtrl', ['$scope', '$state', 'BoatsService', function($scope, $state, BoatsService) {

  $scope.submit = function(){
    var boat = {
      name: $scope.boatName,
      year: $scope.boatStartYear
    };
    if(boat.name && boat.year) {
      BoatsService.add(boat).then(function() {
        Materialize.toast('New boat to the list', 4000);
        $state.go('boatsView');
      }, function(){
        console.log("Cannot add boat.");
      });
    }
  }
}]);