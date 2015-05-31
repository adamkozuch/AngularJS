'use strict';

var app= angular.module('myApp', [
  'ngRoute',
  'myApp.historia',
  'myApp.Formularz',
  'myApp.srodki',
  'myApp.version'
])


    .config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/historia'});
}]);


app.factory('transfers', function() {
    var state;
    var przelewy = [];
    var zwrocPrzelewy = {};

    zwrocPrzelewy.add = function(item) {
        przelewy.push(item);
    };
    zwrocPrzelewy.list = function() {
        return przelewy;
    };

    zwrocPrzelewy.returnState = function() {
        return state;
    };
    zwrocPrzelewy.modifyState = function(modifier) {
         state= state + modifier;
    };

    return zwrocPrzelewy;
});