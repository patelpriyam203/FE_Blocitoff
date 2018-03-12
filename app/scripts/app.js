(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      })

      .state('completedTask', {
        url: '/completedTask',
        controller: 'CompletedCtrl as complete',
        templateUrl: '/templates/completedTask.html'
      });
  }

  angular
    .module('Blocitoff', ['ui.router', 'firebase'])
    .config(config);
 })();
