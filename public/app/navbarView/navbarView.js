/**
 * Created by fredericlopesgoncalvesmagalhaes on 03.07.17.
 */
angular.module('starter.navbarView', [])

.controller('NavbarViewCtrl', ['$scope', 'LoginService', function($scope, LoginService){

  // ATTENTION: USING SERVICE FROM ANOTHER MODULE
  // HOW TO HAVE A COMMON MODULE FOR THE LOGIN/LOGOUT BEHAVIOR?
  $scope.logout = function(){
    LoginService.logout();
  };

  $scope.creationBoat = function(){
    // SHOULD RECEIVE A RESPONSE FROM CREATEBOATVIEW
  };

}]);

/* INITIALIZATION NAVBAR COMPONENTS */
$(document).ready(function () {
  $(".button-collapse").sideNav({
    draggable: true,
    closeOnClick: true
  });
});