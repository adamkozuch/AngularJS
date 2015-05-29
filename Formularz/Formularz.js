'use strict';

angular.module('myApp.Formularz', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Formularz', {
    templateUrl: 'Formularz/Formularz.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope',function($scope) {
$scope.total = 12;
      $scope.kandydat = {
        imie:"",
        nazwisko:"",
        adres:"",
        telefon:""
      }

}]);