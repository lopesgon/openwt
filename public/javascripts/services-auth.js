angular.module('starter.services-auth', [])

.service('AuthService', function($q, $http, API_ENDPOINT) {
  var isAuthenticated = false;
  var username = undefined;

  return {
    login: function(user){

    },

    logout: function(){

    },

    isAuthenticated: function() {
      return isAuthenticated;
    },

    getUsername: function() {
      return username
    }
  };

});