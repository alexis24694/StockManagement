app.controller('ShowItemsController', function ($scope, $location, StockManagementService, ShareData) {
 
    loadRecords();
 
    //Call to the service to get all items
    function loadRecords()
    {
        var promiseGetItems = StockManagementService.getItems();
 
        promiseGetItems.then(function (pl) { $scope.Items = pl.data },
              function (errorPl) {
                  $scope.error = 'Error loading Item', errorPl;
              });
    }
 

    //Route to the addItem partial view
    $scope.addItem = function () {
        $location.path("/additem");
    }
 
    //Route to the editItem partial view with the item Id
    $scope.editItem = function (ItemId) {
        ShareData.value = ItemId;
        $location.path("/edititem");
    }
 
    //Route to the deleteItem partial view with the item Id
    $scope.deleteItem = function (ItemId) {
        ShareData.value = ItemId;
        $location.path("/deleteitem");
    }

    //Logic to highligh a row on click
    $scope.rowHighilited = function(row){
        $scope.selectedRow = row; 
    };
});