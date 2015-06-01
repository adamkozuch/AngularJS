'use strict';

var app =  angular.module('myApp.historia', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/historia', {
    templateUrl: 'historia/historia.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','serwis','$rootScope','transfers','$sce',function($scope,serwis,$rootScope,transfers, $sce) {



        $scope.renderHtml = function (htmlCode) {
                return $sce.trustAsHtml(htmlCode);
        };
        $scope.generateTransfers = transfers.generateHTML
      $scope.fun = function(){return $scope.list().toString()}

}]);



app.factory('serwis', [function() {

  return function() {
alert("wiadomosc");
  }
}]);




app.directive('dyrektywa', function() {
  return {
    template: 'Name: {{dana1}} Address: {{dana2}}'
  };
});

