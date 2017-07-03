/**
 * Created by fredericlopesgoncalvesmagalhaes on 03.07.17.
 */
angular.module('starter.loginView', [])

.controller('LoginViewCtrl', function($scope, LoginService, $state){
  $scope.user = {
    username: '',
    password: ''
  };

  $scope.login = function() {
    LoginService.login($scope.user).then(function() {
      $state.go('boatsView');
    }, function(err) {
      window.alert("Unauthorized credentials.");
    });
  };
})

.service('LoginService', function($q, $http, API_ENDPOINT) {
  var isAuthenticated = false;
  var username = undefined;

  function setSuccess(username){
    isAuthenticated = true;
    username = username;
  }

  function setLogout(){
    isAuthenticated = false;
    username = undefined;
  }

  return {
    login: function(user) {
      return $q(function(resolve, reject) {
        $http.post(API_ENDPOINT.url + '/login', user).then(function(result) {
          if (result.data.success){
            setSuccess(user.username);
            resolve();
          }else{
            reject(result.data.msg);
          }
        });
      });
    },

    logout: function(){
      setLogout();
    },

    isAuthenticated: function(){return isAuthenticated},

    getUsername: function() {return username}
  };

});