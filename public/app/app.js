angular.module('starter', [
  'starter.loginView',
  'starter.navbarView',
  'starter.boatsView',
  'starter.createBoatView',
  'starter.constants',
  'ui.router'])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('loginView', {
        url: '/login',
        templateUrl: 'app/loginView/loginView.html',
        controller: 'LoginViewCtrl'
      })

      .state('boatsView', {
        url: '/boats',
        views: {
          '': {
            templateUrl: 'app/boatsView/boatsView.html',
            controller: 'BoatsViewCtrl'
          },
          'navbar': {
            templateUrl: 'app/navbarView/navbarView.html',
            controller: 'NavbarViewCtrl'
          },
          'createBoatModal@boatsView': {
            templateUrl:'app/createBoatView/createBoatView.html',
            controller: 'CreateBoatViewCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  })

  .run(function($rootScope, $state, LoginService){
    $rootScope.$on('$stateChangeStart', function(evt){
      if(!LoginService.isAuthenticated()){
        $state.go('/login');
      }
    });
  });
