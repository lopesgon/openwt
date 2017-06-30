angular.module('starter.services-auth', [])

.service('AuthService', function($q, $http, API_ENDPOINT) {
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
        $http.post(API_ENDPOINT.url + '/auth', user).then(function(result) {
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