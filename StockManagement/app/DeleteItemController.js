app.controller("DeleteItemController", function ($scope, $location, ShareData, StockManagementService) {
 
    getItem();
    function getItem() {
 
        var promiseGetItem = StockManagementService.getItem(ShareData.value);
 
        promiseGetItem.then(function (pl) {
            $scope.Item = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'Error loading Item', errorPl;
              });
    }
 
    //The delete method used to make HTTP DELETE call to the WEB API to update the record
    $scope.delete = function () {
        var promiseDeleteItem = StockManagementService.delete(ShareData.value);
 
        promiseDeleteItem.then(function (pl) {
            $location.path("/showitem");
        },
              function (errorPl) {
                  $scope.error = 'Error loading Item', errorPl;
              });
    };
 
});