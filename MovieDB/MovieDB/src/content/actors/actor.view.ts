module Actors {

    export class ActorView {

        private _dataLoader: infrastructure.Data.IDataLoader;
        private _controller: any;
        private _layout: any;

        constructor() {
            this._dataLoader = infrastructure.Context.DataLoader;
        }

        public getControllerName(): string {
            return "src.content.actors.actor";
        }

        public createContent(controller: ActorController) {

            var that = this;
            this._controller = controller;

            var actorPage = new sap.m.Page();
            this._layout = new sap.ui.commons.layout.AbsoluteLayout({ width: "100%", height: "100%" } );

            var onRender = (() => {
                this.applyStyles();
            });

            this._controller.init(onRender, infrastructure.EventAggregator.SapEventAggregator.singleton);

            var receivedData = ((data) => {
                this._controller.setModel(data);
                that.buildScreen();
            });

            this.getActor(receivedData);

            actorPage.setTitle(this._controller.getModel().getProperty("/data/name"));
            actorPage.addContent(this._layout);
            return actorPage;
        }

        private getActor(callback: (response: any) => void): void {
            var that = this;
            var dataReceived = ((response: any) => {
                callback(response);
            });

            this._dataLoader.Run(new services.MockActorDataService(), "", dataReceived);
        }

        private buildScreen(): void {
            var actorName = new sap.m.Label("actorName");
            var actorPhoto = new sap.m.Image("actorPhoto");
            var birthName = new sap.m.Label("birthName");
            var placeOfBirth = new sap.m.Label("placeOfBirth");
            var dateOfBirth = new sap.m.Label("dateOfBirth");
            var shortBio = new sap.m.Text("shortBio");
            var filmographyTable = new sap.m.Table("filmographyTable", {
                mode: "SingleSelectMaster",
                selectionChange: [this.itemSelected, this]
            });

            this._layout.addContent(actorName);
            this._layout.addContent(actorPhoto);
            this._layout.addContent(birthName);
            this._layout.addContent(placeOfBirth);
            this._layout.addContent(dateOfBirth);
            this._layout.addContent(shortBio);
            this._layout.addContent(filmographyTable);

            this.setControlsModel();
        }

        private setControlsModel(): void {
            var model = this._controller.getModel();
            this._layout.setModel(model);
            var content = this._layout.getContent();
            

            for (var i = 0; i < content.length; i++) {
                if (content[i].sId == "actorName") {
                    content[i].bindProperty("text", "/data/name");
                } else if (content[i].sId == "actorPhoto") {
                    content[i].bindProperty("src", "/data/urlPhoto");
                } else if (content[i].sId == "birthName") {
                    content[i].bindProperty("text", "/data/birthName");
                } else if (content[i].sId == "placeOfBirth") {
                    content[i].bindProperty("text", "/data/placeOfBirth");
                } else if (content[i].sId == "dateOfBirth") {
                    content[i].bindProperty("text", "/data/dateOfBirth");
                } else if (content[i].sId == "shortBio") {
                    content[i].bindProperty("text", "/data/bio");
                } else if (content[i].sId == "filmographyTable") {
                    this.buildTable(model, content[i]);
                }
            }
            
        }

        private buildTable(model: any, table: any): void {
            var actorFilmography = model.getProperty("/data/filmographies");

            for (var i = 0; i < actorFilmography.length; i++) {
                if (actorFilmography[i].section == "Actor") {
                    var path = "/data/filmographies/" + i + "/filmography";
                }
            }

            /* Bindings */
            table.bindAggregation("columns", "/dataStructures/Actor", function (sId, dataModel) {
                var columnId = dataModel.getObject().field;
                return new sap.m.Column({
                    header: new sap.m.Text({ text: columnId })
                });
            });

            var columns = table.getAggregation("columns");

            table.bindItems(path , function (index, context) {
                var obj = context.getObject();
                var row = new sap.m.ColumnListItem();
                for (var prop in obj) {
                    for (var i = 0; i < columns.length; i++) {
                        var field = columns[i].getAggregation("header").getText();
                        if (prop == field) {
                            row.addCell(new sap.m.Text({ text: obj[prop] }));
                        }
                    }
                }

                return row;
            });
        }

        private itemSelected(event): void {
            /* Retrieve item selected */
            var item = event.getParameter("listItems")[0];
            this._controller.itemSelected(item);
        }

        private applyStyles(): void {
            //this._layout.addStyleClass("container");
            var layoutElement = document.getElementById(this._layout.sId);
            layoutElement.parentElement.className = "row";
            //layoutElement.style.position = "absolute";
            layoutElement.style.height = "100%";
            layoutElement.style.width = "100%";

            var dividerLine = document.createElement("DIV");
            dividerLine.className = "divider";

            var children = layoutElement.children;
            for (var i = 0; i < children.length; i++) {
                children[i].setAttribute("class", "actorPositioning");
            }
        }

    }

}

sap.ui.jsview("src.content.actors.actor", new Actors.ActorView());