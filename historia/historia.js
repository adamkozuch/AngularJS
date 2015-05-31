'use strict';

var app =  angular.module('myApp.historia', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/historia', {
    templateUrl: 'historia/historia.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','serwis','$rootScope','transfers',function($scope,serwis,$rootScope,transfers) {
     // $scope.sth =10;
      $scope.bll = 23;
    $rootScope.test = 200000;
      $scope.dana1 = "ddddd";
      $scope.dana2 = 2222;

        $scope.lacz = function(){
            var text="";
            for (var i = 0; i < 10; i++)
                text +=$scope.body2;
            return text;
        }


        $scope.list = transfers.list
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

