app.controller('AddItemController', function ($scope, $location, StockManagementService) {
//Call to the service to add a new item
$scope.save = function () {
    var Item = {
        Code: $scope.Code,
        Name: $scope.Name,
        Description: $scope.Description,
        Quantity: $scope.Quantity
    };
  
    var promisePost = StockManagementService.post(Item);
 
 
    promisePost.then(function (pl) {
        $scope.Code = pl.data.Code;
        alert("Code " + pl.data.Code);
        $location.path("/showitem");
    },
    function (errorPl) {
        $scope.error = 'failure loading Item', errorPl;
    });
 
};
});