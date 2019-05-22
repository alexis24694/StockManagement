app.controller('AddItemController', function ($scope, $location, StockManagementService) {
$scope.EmpNo = 0;
//The Save scope method used to define the Item object and 
//post the Item information to the server by making call to the Service
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