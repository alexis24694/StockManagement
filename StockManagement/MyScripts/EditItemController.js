app.controller("EditItemController", function ($scope, $location,ShareData,StockManagementService) {
     
    getItem();
    function getItem() {
        
        var promiseGetItem = StockManagementService.getItem(ShareData.value);

        
        promiseGetItem.then(function (pl)
        {
            $scope.Item = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'Error loading Item', errorPl;
              });
    }


    //The Save method used to make HTTP PUT call to the WEB API to update the record

    $scope.save = function () {
        var Item = {
            Code: $scope.Item.Code,
            Name: $scope.Item.Name,
            Description: $scope.Item.Description,
            Quantity: $scope.Item.Quantity
        };

        var promisePutItem = StockManagementService.put($scope.Item.Code,Item);
        promisePutItem.then(function (pl)
        {
            $location.path("/showitem");
        },
              function (errorPl) {
                  $scope.error = 'Error loading Item', errorPl;
              });
    };

});