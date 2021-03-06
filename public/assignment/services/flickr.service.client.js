(function () {
    angular
        .module("WebAppMaker")
        .factory("FlickrService", FlickrService);

    var key = "46426e2601cd8ce84d539057195d1f15";
    var secret = "d9be194ee03d1a41";
    var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";


    function FlickrService($http) {
        var api = {
            searchPhotos: searchPhotos
        };
        return api;
        
        function searchPhotos(searchTerm) {
            var url = urlBase
                        .replace("API_KEY", key)
                        .replace("TEXT", searchTerm);
            return $http.get(url);
        }
    }
})();