jQuery.sap.require("movieDB.src.infrastructure.Services.Mock.MockDataService");
jQuery.sap.require("movieDB.src.infrastructure.EventAggregator.SapEventAggregator");

module Main {

    export class MainView {

        private _controller: any;
        private _app: any;

        public getControllerName(): string {
            return "src.content.main";
        }

        public createContent(controller: MainController) {

            this._controller = controller;

            var onRender = (() => {
            });

            this._controller.init(onRender, infrastructure.EventAggregator.SapEventAggregator.singleton, this.movieInfoLoaded, this.navigateBack);

            this._app = new sap.m.App("movieDB");

            var actorView = sap.ui.view("actorView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.actors.actor", height: "100%" });
            var movieView = sap.ui.view("movieView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.movies.movie", height: "100%" });

            this._app.addPage(actorView);
            this._app.addPage(movieView);

            return this._app;
        }

        private movieInfoLoaded(response: any): void {
            var core = sap.ui.getCore();
            var app = core.byId("movieDB");
            var movieView = app.getPage("movieView");
            movieView.setModel(response);
            app.to("movieView");
        }

        private navigateBack(): void {
            var core = sap.ui.getCore();
            var app = core.byId("movieDB");
            app.back();
        }
    }

}

sap.ui.jsview("src.content.main", new Main.MainView());