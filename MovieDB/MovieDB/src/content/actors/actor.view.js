/// <reference path="../../../scripts/typings/defiant.d.ts" />
jQuery.sap.require("movieDB.src.infrastructure.Services.Mock.MockDataService");
var Actors;
(function (Actors) {
    var ActorView = (function () {
        function ActorView() {
            this._dataLoader = infrastructure.Context.DataLoader;
        }
        ActorView.prototype.getControllerName = function () {
            return "src.content.actors.actor";
        };
        ActorView.prototype.createContent = function (controller) {
            var _this = this;
            var that = this;
            this._controller = controller;
            this._layout = new sap.ui.commons.layout.AbsoluteLayout({ width: "100%", height: "100%" });
            var onRender = (function () {
                _this._layout.addStyleClass("container");
                var layoutElement = document.getElementById(_this._layout.sId);
                layoutElement.parentElement.className = "row";
                layoutElement.style.position = "absolute";
                layoutElement.style.height = "100%";
                layoutElement.style.width = "100%";
                var dividerLine = document.createElement("DIV");
                dividerLine.className = "divider";
                var children = layoutElement.children;
                for (var i = 0; i < children.length; i++) {
                    children[i].setAttribute("class", "actorPositioning");
                }
            });
            this._controller.init(onRender);
            var receivedData = (function (data) {
                _this._controller.setModel(data);
                that.buildScreen();
            });
            this.getActor(receivedData);
            return this._layout;
        };
        ActorView.prototype.getActor = function (callback) {
            var that = this;
            var dataReceived = (function (response) {
                callback(response);
            });
            this._dataLoader.Run(new services.MockDataService(), "", dataReceived);
        };
        ActorView.prototype.buildScreen = function () {
            var actorName = new sap.m.Label("actorName");
            var actorPhoto = new sap.m.Image("actorPhoto");
            var birthName = new sap.m.Label("birthName");
            var placeOfBirth = new sap.m.Label("placeOfBirth");
            var dateOfBirth = new sap.m.Label("dateOfBirth");
            var shortBio = new sap.m.Text("shortBio");
            var filmographyTable = new sap.m.Table("filmographyTable");
            this._layout.addContent(actorName);
            this._layout.addContent(actorPhoto);
            this._layout.addContent(birthName);
            this._layout.addContent(placeOfBirth);
            this._layout.addContent(dateOfBirth);
            this._layout.addContent(shortBio);
            this._layout.addContent(filmographyTable);
            this.setControlsModel();
        };
        ActorView.prototype.setControlsModel = function () {
            var model = this._controller.getModel();
            this._layout.setModel(model);
            var content = this._layout.getContent();
            for (var i = 0; i < content.length; i++) {
                if (content[i].sId == "actorName") {
                    content[i].bindProperty("text", "/data/name");
                }
                else if (content[i].sId == "actorPhoto") {
                    content[i].bindProperty("src", "/data/urlPhoto");
                }
                else if (content[i].sId == "birthName") {
                    content[i].bindProperty("text", "/data/birthName");
                }
                else if (content[i].sId == "placeOfBirth") {
                    content[i].bindProperty("text", "/data/placeOfBirth");
                }
                else if (content[i].sId == "dateOfBirth") {
                    content[i].bindProperty("text", "/data/dateOfBirth");
                }
                else if (content[i].sId == "shortBio") {
                    content[i].bindProperty("text", "/data/bio");
                }
                else if (content[i].sId == "filmographyTable") {
                    this.buildTable(model, content[i]);
                }
            }
        };
        ActorView.prototype.buildTable = function (model, table) {
            var actorFilmography = model.getProperty("/data/filmographies");
            for (var i = 0; i < actorFilmography.length; i++) {
                if (actorFilmography[i].section == "Actor") {
                    console.log(actorFilmography[i]);
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
            table.bindItems(path, function (index, context) {
                var obj = context.getObject();
                var row = new sap.m.ColumnListItem();
                for (var k in obj) {
                    row.addCell(new sap.m.Text({ text: obj[k] }));
                }
                return row;
            });
        };
        return ActorView;
    })();
    Actors.ActorView = ActorView;
})(Actors || (Actors = {}));
sap.ui.jsview("src.content.actors.actor", new Actors.ActorView());
