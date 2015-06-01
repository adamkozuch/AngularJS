'use strict'

var app =  angular.module('myApp.srodki', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/srodki', {
            templateUrl: 'srodki/srodki.html',
            controller: 'mainModuleCtrl'
        });
    }])


    .controller('mainModuleCtrl',['$scope','transfers', function($scope, transfers) {
            $scope.amount = transfers.returnState();
    }]);



app.directive('dir', function() {
    return {
        template: 'Dostępne środki : {{amount}} '
    };
});
