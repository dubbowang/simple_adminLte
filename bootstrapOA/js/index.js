/*进入严格模式*/
'use strict';
var app = angular.module('app', [
    'ngRoute',
    'bookListApp'
]);
app.config(['$routeProvider', function ($routeProvider) {
    /*app设置 用于当跳转路径未知时跳转的默认路径*/
    $routeProvider.otherwise({redirectTo: '/bookList'});
}]);
app.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function (event, data) {
        console.log(event);
        console.log(data);
    });
}]);
app.controller('mainController', ['$http', '$scope', function ($http, $scope) {
    $scope.init = function () {
    }
    $scope.init();
}]);