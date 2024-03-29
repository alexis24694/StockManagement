﻿var app = angular.module("ApplicationModule", ["ngRoute"]);
 
//Defining Factory
app.factory("ShareData", function () {
    return { value: 0 }
});
 
//Defining Routing
app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider.when('/',
    {
        templateUrl: 'Item/ShowItems',
        controller: 'ShowItemsController'
    });
    $routeProvider.when('/additem',
    {
        templateUrl: 'Item/AddItem',
        controller: 'AddItemController'
    });
    $routeProvider.when("/edititem",
    {
        templateUrl: 'Item/EditItem',
        controller: 'EditItemController'
    });
    $routeProvider.when('/deleteitem',
    {
        templateUrl: 'Item/DeleteItem',
        controller: 'DeleteItemController'
    });
    $routeProvider.otherwise(
    {
        redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}]);

