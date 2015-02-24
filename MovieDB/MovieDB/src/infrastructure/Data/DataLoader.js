var infrastructure;
(function (infrastructure) {
    var Data;
    (function (Data) {
        /* CLASSES */
        var DataLoader = (function () {
            function DataLoader() {
            }
            DataLoader.prototype.Run = function (dataService, dataResponse, callback, payload) {
                if (payload === void 0) { payload = {}; }
                var url = payload.url;
                dataService.getData(url, function (response) {
                    callback(response);
                }, payload);
            };
            return DataLoader;
        })();
        Data.DataLoader = DataLoader;
        var DataLoaderResponse = (function () {
            function DataLoaderResponse() {
            }
            return DataLoaderResponse;
        })();
        Data.DataLoaderResponse = DataLoaderResponse;
    })(Data = infrastructure.Data || (infrastructure.Data = {}));
})(infrastructure || (infrastructure = {}));
