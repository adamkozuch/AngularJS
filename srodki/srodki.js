'use strict'

var app =  angular.module('myApp.srodki', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/srodki', {
            templateUrl: 'srodki/srodki.html',
            controller: 'mainModuleCtrl'
        });
    }])


    .controller('mainModuleCtrl', function($scope) {
            $scope.amount =1000;
    });



app.directive('dir', function() {
    return {
        template: 'Dostępne środki : {{amount}} '
    };
});
