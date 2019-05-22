var app = angular.module("ApplicationModule", ["ngRoute"]);
 
//The Factory used to define the value to
//Communicate and pass data across controllers
 
app.factory("ShareData", function () {
    return { value: 0 }
});
 
//Defining Routing
app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider.when('/showitems',
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

