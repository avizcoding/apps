jQuery.sap.require("movieDB.src.infrastructure.Services.Mock.MockDataService");
jQuery.sap.require("movieDB.src.infrastructure.Services.Real.DataService");
jQuery.sap.require("movieDB.src.infrastructure.EventAggregator.SapEventAggregator");
jQuery.sap.require("movieDB.src.infrastructure.Constants");

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

            this._controller.init(onRender, infrastructure.EventAggregator.SapEventAggregator.singleton, this.movieDataReceived, this.navigateBack);

            /* Init application */
            this._app = new sap.m.App("movieDB");

            var actorView = sap.ui.view("actorView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.actors.actor", height: "100%" });
            var movieView = sap.ui.view("movieView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.movies.movie", height: "100%" });

            this._app.addPage(actorView);
            this._app.addPage(movieView);

            /* Retrieve data */
            var actorDataReceived = ((response: any) => {
                if (typeof response.data == "string") {
                    var parsedData = JSON.parse(response.data);
                } else {
                    var parsedData = response.data;
                }
                var data = { data: parsedData[0] };
                actorView.setModel(data);
            });

            var payload: {} = {};
            payload["url"] = Constants.Constants.actorDataUrl;
            for (var prop in infrastructure.Context.Params) {
                payload[prop] = infrastructure.Context.Params[prop];
            }

            this._controller.getActorData(actorDataReceived, payload);

            return this._app;
        }

        private movieDataReceived(response: any): void {
            var core = sap.ui.getCore();
            var app = core.byId("movieDB");

            if (typeof response.data == "string") {
                var parsedData = JSON.parse(response.data);
            } else {
                var parsedData = response.data;
            }

            if (Array.isArray(parsedData)) {
                var data = { data: parsedData[0] };
            } else {
                var data = { data: parsedData };
            }

            var movieView = app.getPage("movieView");
            movieView.setModel(data);

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