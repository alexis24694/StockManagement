app.service("StockManagementService", function ($http) {
 
    //Function to Read All Items
    this.getItems = function () {
        return $http.get("/api/ItemApi");  
    };
 
    //Fundction to Read Item based upon id
    this.getItem = function (id) {
        return $http.get("/api/ItemApi/" + id);
    };
 
    //Function to create new Item
    this.post = function (Item) {
        var request = $http({
            method: "post",
            url: "/api/ItemApi",
            data: Item
        });
        return request;
    };
 
    //Function  to Edit Item based upon id 
    this.put = function (id,Item) {
        var request = $http({
            method: "put",
            url: "/api/ItemApi/" + id,
            data: Item
        });
        return request;
    };
 
    //Function to Delete Item based upon id
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/ItemApi/" + id
        });
        return request;
    };
});