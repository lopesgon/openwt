angular.module('starter.controllers', [])

.controller('BoatsAppCtrl', function($scope, AuthService){})

.controller('NavCtrl', function($scope, AuthService){
  $scope.logout = function(){
    AuthService.logout();
  };

  $scope.username = AuthService.getUsername();
})

.controller('LoginCtrl', function($scope, AuthService, $state) {
  $scope.user = {
    username: '',
    password: ''
  };

  $scope.login = function() {
    AuthService.login($scope.user).then(function(msg) {
      $state.go('nav.boats');
    }, function(errMsg) {
      var alertPopup = function(){
        console.log("LoginCtrl -> TODO: ALERT MSG")
      }
    });
  };
})

.controller('BoatsCtrl', function($scope, BoatsService) {
  $scope.boats = [];

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

  $scope.add = function(boat){
    BoatsService.add(boat).then(function(){
      $scope.boats.add(boat);
    }, function(err){
      console.log("ERROR HANDLER ON: " + err);
    });
  }

});