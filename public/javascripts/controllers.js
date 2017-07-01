angular.module('starter.controllers', [])

.controller('BoatsAppCtrl', function($scope, AuthService){})

.controller('NavCtrl', function($scope, AuthService){
  $scope.logout = function(){
    AuthService.logout();
  };
})

.controller('LoginCtrl', function($scope, AuthService, $state) {
  $scope.user = {
    username: '',
    password: ''
  };

  $scope.login = function() {
    AuthService.login($scope.user).then(function() {
      $state.go('nav.boats');
    }, function(err) {
      window.alert("Unauthorized credentials.");
    });
  };
})

.controller('BoatsCtrl', function($scope, BoatsService) {
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
      poidsTonnes: undefined
    };
    BoatsService.add(boat).then(function(){
      $scope.boats.push(boat);
    }, function(err){
      console.log("ERROR HANDLER ON: " + err);
    });
  }

});