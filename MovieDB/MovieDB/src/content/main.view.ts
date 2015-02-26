jQuery.sap.require("movieDB.src.infrastructure.Services.Mock.MockDataService");
jQuery.sap.require("movieDB.src.infrastructure.Services.Real.DataService");
jQuery.sap.require("movieDB.src.infrastructure.EventAggregator.SapEventAggregator");
jQuery.sap.require("movieDB.src.infrastructure.Constants");

module Main {

    export class MainView {

        private _controller: any;
        private _app: any;
        private _errorDialog: any;
        private _actorView: any;
        private _movieView: any;

        public getControllerName(): string {
            return "src.content.main";
        }

        public createContent(controller: MainController) {

            this._controller = controller;

            var onRender = (() => {
            });

            this._controller.init(onRender, infrastructure.EventAggregator.SapEventAggregator.singleton, this.actorDataReceived, this.movieDataReceived, this.navigateBack);

            /* Init application */
            this._app = new sap.m.App("movieDB");

            /* Error message dialog */
            this._errorDialog = new sap.m.Dialog("errorDialog", {
                title: "Error",
                beginButton: new sap.m.Button({
                    text: "OK",
                    press: [this.closeErrorDialog, this]
                })
            });
            this._errorDialog.addContent(new sap.m.Label({ text: "Error Message" }));

            /* Input Form */
            var inputPage = new sap.m.Page();
            var inputPanel = new sap.m.Panel();
            var panelLayout = new sap.ui.commons.layout.HorizontalLayout();

            var inputField = new sap.m.Input();
            var inputCategory = new sap.m.ComboBox();
            for (var i = 0; i < Constants.Categories.categories.length; i++) {
                var item = new sap.ui.core.Item({ key: Constants.Categories.categories[i], text: Constants.Categories.categories[i] });
                inputCategory.addItem(item);
            }

            var searchButton = new sap.m.Button({
                text: "Search",
                press: [this.runSearch, this]
            });

            panelLayout.addContent(inputField);
            panelLayout.addContent(inputCategory);
            panelLayout.addContent(searchButton);
            inputPanel.addContent(panelLayout);
            inputPage.addContent(inputPanel);

            this._actorView = sap.ui.view("actorView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.actors.actor", height: "100%" });
            this._movieView = sap.ui.view("movieView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.movies.movie", height: "100%" });

            this._app.addPage(inputPage);
            this._app.addPage(this._actorView.getContent()[0]);
            this._app.addPage(this._movieView.getContent()[0]);

            return this._app;
        }

        private runSearch(event: any): void {

            /* Since this event will only be executed in the input form screen, 
            *  get the input objects from the current page.
            */
            var currentPage = this._app.getCurrentPage();
            var inputFields = currentPage.getContent()[0].getContent()[0].getContent();
            var input = {};
            var value: string;
            var category: string;
            var dataRequestSent: boolean = false;

            for (var i = 0; i < inputFields.length; i++) {
                if (inputFields[i].sId.indexOf("input") != -1) {
                    value = inputFields[i].getValue();
                } else if (inputFields[i].sId.indexOf("box") != -1) {
                    category = inputFields[i].getValue();
                }

                if (category != null && category != "" && value != null && value != "") {
                    input[category] = value;
                    dataRequestSent = true;
                    this._controller.getData(input);
                    break;
                }
            }

            if(dataRequestSent == false) {
                this.setError("Input the data properly");
            }
        }

        private actorDataReceived(response: any): void {
            var core = sap.ui.getCore();

            if (response.hasError) {
                var errorDialog = core.byId("errorDialog");
                errorDialog.getContent()[0].setText(response.error);
                errorDialog.open();
            } else {
                if (typeof response.data == "string") {
                    var parsedData = JSON.parse(response.data);
                } else {
                    var parsedData = response.data;
                }
                var data = { data: parsedData[0] };

                var app = core.byId("movieDB");
                var actorView = core.byId("actorView");
                actorView.setModel(data);

                app.to("actorPage");
            }
        }

        private movieDataReceived(response: any): void {
            var core = sap.ui.getCore();

            if (response.hasError) {
                var errorDialog = core.byId("errorDialog");
                errorDialog.getContent()[0].setText(response.error);
                errorDialog.open();
            } else {
                if (typeof response.data == "string") {
                    var parsedData = JSON.parse(response.data);
                } else {
                    var parsedData = response.data;
                }
                var data = { data: parsedData[0] };

                var app = core.byId("movieDB");
                var actorView = core.byId("movieView");
                actorView.setModel(data);

                app.to("moviePage");
            }
        }

        private navigateBack(): void {
            var core = sap.ui.getCore();
            var app = core.byId("movieDB");
            app.back();
        }

        private setError(message: string): void {
            this._errorDialog.getContent()[0].setText(message);
            this._errorDialog.open();
        }

        private closeErrorDialog(event: any): void {
            this._errorDialog.close();
        }
    }

}

sap.ui.jsview("src.content.main", new Main.MainView());