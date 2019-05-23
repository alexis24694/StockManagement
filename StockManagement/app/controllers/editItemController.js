app.controller("EditItemController", function ($scope, $location,ShareData,StockManagementService) {
     
    getItem();
    function getItem() {
        
        var promiseGetItem = StockManagementService.getItem(ShareData.value);        
        promiseGetItem.then(function (item)
        {
            $scope.Item = item.data;
        },
        function (error) {
            $scope.error = 'Error loading Item', error;
        });
    }


    //Call to the service to save the changes made to an item
    $scope.save = function () {
        var Item = {
            Id: $scope.Item.Id,
            Code: $scope.Item.Code,
            Name: $scope.Item.Name,
            Description: $scope.Item.Description,
            Quantity: $scope.Item.Quantity
        };

        var promisePutItem = StockManagementService.put($scope.Item.Id,Item);
        promisePutItem.then(function ()
        {
            $location.path("/showitem");
        },
        function (error) {
            $scope.error = 'Error loading Item', error;
        });
    };

});