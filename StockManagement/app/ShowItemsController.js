app.controller('ShowItemsController', function ($scope, $location, StockManagementService, ShareData) {
 
    loadRecords();
 
    //Function to Load all Items Records.   
    function loadRecords()
    {
        var promiseGetItems = StockManagementService.getItems();
 
        promiseGetItems.then(function (pl) { $scope.Items = pl.data },
              function (errorPl) {
                  $scope.error = 'Error loading Item', errorPl;
              });
    }
 

    //Method to route to the addItem
    $scope.addItem = function () {
        $location.path("/additem");
    }
 
    //Method to route to the editItem
    //The EmpNo passed to this method is further set to the ShareData.
    //This value can then be used to communicate across the Controllers
    $scope.editItem = function (ItemId) {
        ShareData.value = ItemId;
        $location.path("/edititem");
    }
 
    //Method to route to the deleteItem
    //The EmpNo passed to this method is further set to the ShareData.
    //This value can then be used to communicate across the Controllers
    $scope.deleteItem = function (ItemId) {
        ShareData.value = ItemId;
        $location.path("/deleteitem");
    }
});