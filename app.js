'use strict';

var app= angular.module('myApp', [
  'ngRoute',
  'myApp.historia',
  'myApp.Formularz',
  'myApp.srodki',
  'myApp.version'
])


    .config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/srodki'});
}]);


app.factory('transfers', function() {
    var state=300;
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
         state =state- modifier;
    };

    zwrocPrzelewy.generateHTML =  function() {
        var result="";
        for(var i=0;i<przelewy.length;i++) {


            var account = '<div style="border-color: #006666;border: double;width: 200px"><label style="width: 200px"> Konto :' + przelewy[i].account_number + '<label><br>';
            var name = '<label style="width: 200px"> Nazwa :' + przelewy[i].name + '<label><br>';
            //var Data = '<label style="width: 200px"> Data przelewu :'+przelewy[i].date  + '<label><br>';
            var title = '<label style="width: 200px"> Tytul :' + przelewy[i].title + '<label><br>';
            var przed = '<label style="width: 200px"> Stan konta przed ;' + przelewy[i].srodki_przed + '<label><br>';
            var po = '<label style="width: 200px"> Stan konta po :' + przelewy[i].srodki_po + '<label><br></div>';
            result +=account+name+title+przed+po;
        }
        return result;
    };

    return zwrocPrzelewy;
});