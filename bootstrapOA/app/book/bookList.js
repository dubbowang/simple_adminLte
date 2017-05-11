/*进入严格模式*/
'use strict';
var bookListApp = angular.module('bookListApp',['ngRoute']);

bookListApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/bookList', {
        templateUrl: "app/book/bookList.html"
    });
}]);

bookListApp.controller("bookListController", function ($scope, $location, $http) {
    $scope.init = function(){
    }
    $scope.init();
});