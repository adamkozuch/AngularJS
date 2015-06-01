'use strict';

var app= angular.module('myApp.Formularz', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Formularz', {
    templateUrl: 'Formularz/Formularz.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$sce','$location','$rootScope','processTransfer', 'transfers',function($scope,$sce,$location, processTransfer,$rootScope, transfers) {

        $scope.kwota=0;
        $scope.n =false;
        $scope.showForm =true;

        $scope.przelew = {
            date:"",
        account_number:"",
        name:"",
        title:"",
        srodki_przed:"",
        srodki_po:""
      }

        $scope.prepareTransfer = function()
        {
            $scope.przelew.srodki_przed = transfers.returnState();
            $scope.n = true;
            $scope.showForm =false;
            $scope.przelew.srodki_po = transfers.returnState()-$scope.kwota;
            $scope.renderHtml($scope.generateHtml())
        }

        $scope.makeTransfer = function()
        {
            transfers.modifyState($scope.kwota);
            $scope.add($scope.przelew);
            alert("przelew wykonany")
        }


       $scope.add = transfers.add;
        $scope.go = function ( path ) {
            $location.path( path );
        };

        $scope.renderHtml = function (htmlCode) {
            if($scope.n)
            return $sce.trustAsHtml(htmlCode);
        };

        $scope.generateHtml =  function() {
            var account = '<form>   <label> Konto'+$scope.przelew.account_number+'<label><br>';
            var name = '<label> Nazwa'+$scope.przelew.name+'<label><br>';
            var title = '<label> Tytul'+$scope.przelew.title+'<label><br>';
            var przed = '<label> Stan konta przed'+$scope.przelew.srodki_przed+'<label><br>';
            var po = '<label> Stan konta po'+$scope.przelew.srodki_po+'<label><br> </label>' +
                ' </form>' ;


            return account+name+title+przed+po;
        };
}]);

app.directive('myDyrektywa', function() {
    return {
        templateUrl: 'Formularz/przelew.html'
    };
});

app.service('processTransfer', function() {
    this.all = function(a) {a.forEach(function(entry) {
        return entry.account_number;
    }) };
});