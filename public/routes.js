angular.module('pirates')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/pirates.html'
      })
  });
