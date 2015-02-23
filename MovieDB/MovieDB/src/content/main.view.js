jQuery.sap.require("movieDB.src.infrastructure.Services.Mock.MockDataService");
jQuery.sap.require("movieDB.src.infrastructure.EventAggregator.SapEventAggregator");
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
            this._controller.init(onRender, infrastructure.EventAggregator.SapEventAggregator.singleton, this.movieInfoLoaded, this.navigateBack);
            this._app = new sap.m.App("movieDB");
            var actorView = sap.ui.view("actorView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.actors.actor", height: "100%" });
            var movieView = sap.ui.view("movieView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.movies.movie", height: "100%" });
            this._app.addPage(actorView);
            this._app.addPage(movieView);
            return this._app;
        };
        MainView.prototype.movieInfoLoaded = function (response) {
            var core = sap.ui.getCore();
            var app = core.byId("movieDB");
            var movieView = app.getPage("movieView");
            movieView.setModel(response);
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
