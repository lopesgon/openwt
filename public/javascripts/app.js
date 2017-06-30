angular.module('starter', [
  'starter.controllers',
  'starter.services-boats',
  'starter.services-auth',
  'starter.constants',
  'ui.router'])

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

          .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
          })

          .state('nav', {
            url: '',
            abstract: true,
            templateUrl: 'templates/navbar.html',
            controller: 'NavCtrl'
          })

          .state('nav.boats', {
            url: '/boats',
            views: {
              'content': {
                templateUrl: 'templates/nav-boats.html',
                controller: 'BoatsCtrl'
              }
            }
          });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');
    });
