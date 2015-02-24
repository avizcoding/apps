jQuery.sap.require("movieDB.src.infrastructure.Data.IDataService");
var services;
(function (services) {
    var ActorDataService = (function () {
        function ActorDataService() {
        }
        ActorDataService.prototype.getData = function (url, callback, payload) {
            if (payload === void 0) { payload = {}; }
            url = url + "&name=" + payload.ACTOR;
            infrastructure.Context.AjaxCaller.Run(url, "GET", {}, "application/text-plain; charset= utf - 8", "text", true, false, function (response) {
                callback(response);
            });
        };
        return ActorDataService;
    })();
    services.ActorDataService = ActorDataService;
    var MovieDataService = (function () {
        function MovieDataService() {
        }
        MovieDataService.prototype.getData = function (url, callback, payload) {
            if (payload === void 0) { payload = {}; }
            url = url + "&title=" + payload.MOVIE;
            console.log(url);
            infrastructure.Context.AjaxCaller.Run(url, "GET", {}, "application/text-plain; charset= utf - 8", "text", true, false, function (response) {
                callback(response);
            });
        };
        return MovieDataService;
    })();
    services.MovieDataService = MovieDataService;
})(services || (services = {}));
