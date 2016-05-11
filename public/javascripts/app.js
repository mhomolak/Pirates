angular.module('pirates', ['ngRoute'])
  .controller('PiratesController', function($scope) {

    $scope.math = 2+2;
    console.log($scope.math);
  });
