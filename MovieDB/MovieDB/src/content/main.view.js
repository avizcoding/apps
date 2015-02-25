jQuery.sap.require("movieDB.src.infrastructure.Services.Mock.MockDataService");
jQuery.sap.require("movieDB.src.infrastructure.Services.Real.DataService");
jQuery.sap.require("movieDB.src.infrastructure.EventAggregator.SapEventAggregator");
jQuery.sap.require("movieDB.src.infrastructure.Constants");
var Main;
(function (Main) {
    var MainView = (function () {
        function MainView() {
        }
        MainView.prototype.getControllerName = function () {
            return "src.content.main";
        };
        MainView.prototype.createContent = function (controller) {
            this._controller = controller;
            var onRender = (function () {
            });
            this._controller.init(onRender, infrastructure.EventAggregator.SapEventAggregator.singleton, this.movieDataReceived, this.navigateBack);
            /* Init application */
            this._app = new sap.m.App("movieDB");
            var actorView = sap.ui.view("actorView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.actors.actor", height: "100%" });
            var movieView = sap.ui.view("movieView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.movies.movie", height: "100%" });
            this._app.addPage(actorView);
            this._app.addPage(movieView);
            /* Retrieve data */
            var actorDataReceived = (function (response) {
                if (typeof response.data == "string") {
                    var parsedData = JSON.parse(response.data);
                }
                else {
                    var parsedData = response.data;
                }
                var data = { data: parsedData[0] };
                actorView.setModel(data);
            });
            var payload = {};
            payload["url"] = Constants.Constants.actorDataUrl;
            for (var prop in infrastructure.Context.Params) {
                payload[prop] = infrastructure.Context.Params[prop];
            }
            this._controller.getActorData(actorDataReceived, payload);
            return this._app;
        };
        MainView.prototype.movieDataReceived = function (response) {
            var core = sap.ui.getCore();
            var app = core.byId("movieDB");
            if (typeof response.data == "string") {
                var parsedData = JSON.parse(response.data);
            }
            else {
                var parsedData = response.data;
            }
            if (Array.isArray(parsedData)) {
                var data = { data: parsedData[0] };
            }
            else {
                var data = { data: parsedData };
            }
            var movieView = app.getPage("movieView");
            movieView.setModel(data);
            app.to("movieView");
        };
        MainView.prototype.navigateBack = function () {
            var core = sap.ui.getCore();
            var app = core.byId("movieDB");
            app.back();
        };
        return MainView;
    })();
    Main.MainView = MainView;
})(Main || (Main = {}));
sap.ui.jsview("src.content.main", new Main.MainView());
