app.service("StockManagementService", function ($http) {
 
    //http request to read all items
    this.getItems = function () {
        return $http.get("/api/ItemApi");  
    };
 
    //http request to read an item by a given id
    this.getItem = function (id) {
        return $http.get("/api/ItemApi/" + id);
    };
 
    //http request to create a new item
    this.post = function (Item) {
        var request = $http({
            method: "post",
            url: "/api/ItemApi",
            data: Item
        });
        return request;
    };
 
    //http request to edit an existing item
    this.put = function (id,Item) {
        var request = $http({
            method: "put",
            url: "/api/ItemApi/" + id,
            data: Item
        });
        return request;
    };
 
    //http request to delete an existing item
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/ItemApi/" + id
        });
        return request;
    };
});