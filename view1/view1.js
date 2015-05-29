'use strict';

var app =  angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','serwis',function($scope,serwis) {
      $scope.sth =10;
      $scope.bll = 23;

      $scope.dana1 = "ddddd";
      $scope.dana2 = 2222;
      $scope.fun = function(){$scope.bll=33; serwis()}

      $scope.customer = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
      };

}]);



app.factory('serwis', [function() {

  return function() {
alert("wiadomosc");
  }
}]);


app.directive('myDyrektywa', function() {
  return {
    template: 'Name: {{dana1}} Address: {{dana2}}'
  };
});

