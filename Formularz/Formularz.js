'use strict';

var app= angular.module('myApp.Formularz', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Formularz', {
    templateUrl: 'Formularz/Formularz.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$sce','$rootScope','processTransfer', 'transfers',function($scope,$sce, processTransfer,$rootScope, transfers) {

        $scope.n =false;
      $scope.przelew = {
        account_number:"",
        name:"",
        title:"",
        srodki_przed:"",
        srodki_po:""
      }
       $scope.add = transfers.add;

        $scope.changeN = function(){
            $scope.n = true;
        }
        $scope.renderHtml = function (htmlCode) {
            if($scope.n)
            return $sce.trustAsHtml(htmlCode);
        };

        $scope.generateHtml =  function() {
            var account = '<label> Konto'+$scope.przelew.account_number+'<label><br>';
            var name = '<label> Nazwa'+$scope.przelew.name+'<label><br>';
            var title = '<label> Tytul'+$scope.przelew.title+'<label><br>';
            var przed = '<label> Stan konta przed'+$scope.przelew.srodki_przed+'<label><br>';
            var po = '<label> Stan konta po'+$scope.przelew.srodki_po+'<label><br>';

            return account+name+title+przed+po;
        };
}]);

app.directive('myDyrektywa', function() {
    return {
        template: 'Name: {{przelew.account_number}} Address: {{przelew.name}}'
    };
});

app.service('processTransfer', function() {
    this.all = function(a) {a.forEach(function(entry) {
        return entry.account_number;
    }) };
});