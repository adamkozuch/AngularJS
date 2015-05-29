'use strict'

var app =  angular.module('myApp.mainModule', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/mainModule', {
            templateUrl: 'mainModule/mainModule.html',
            controller: 'mainModuleCtrl'
        });
    }])


    .controller('mainModuleCtrl function($scope,$http) {
            $scope.srodki =1000;



    }]);
