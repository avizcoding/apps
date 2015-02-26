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
            this._actorPage = new sap.m.Page("actorPage");
            this._actorPage.setShowNavButton(true);
            this._actorPage.attachNavButtonPress(this.navigateBack, this);
            this._layout = new sap.ui.commons.layout.AbsoluteLayout({ width: "100%", height: "100%" });
            var onRender = (function () {
                _this.applyStyles();
            });
            this._controller.init(onRender, infrastructure.EventAggregator.SapEventAggregator.singleton);
            this._actorPage.addContent(this._layout);
            return this._actorPage;
        };
        ActorView.prototype.setModel = function (data) {
            this._controller.setModel(data);
            this._actorPage.setTitle(this._controller.getModel().getProperty("/data/name"));
            this.buildScreen();
        };
        ActorView.prototype.buildScreen = function () {
            var actorName = new sap.m.Label("actorName");
            var actorPhoto = new sap.m.Image("actorPhoto");
            var birthName = new sap.m.Label("birthName");
            var placeOfBirth = new sap.m.Label("placeOfBirth");
            var dateOfBirth = new sap.m.Label("dateOfBirth");
            var shortBio = new sap.m.Text("shortBio");
            var filmographyTable = new sap.m.Table("ActorFilmographyTable", {
                mode: "SingleSelectMaster",
                selectionChange: [this.movieSelected, this]
            });
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
                else if (content[i].sId == "ActorFilmographyTable") {
                }
            }
        };
        ActorView.prototype.buildTable = function (model, table) {
            var actorFilmography = model.getProperty("/data/filmographies");
            for (var i = 0; i < actorFilmography.length; i++) {
                if (actorFilmography[i].section == "Actor") {
                    var path = "/data/filmographies/" + i + "/filmography";
                }
            }
            /* Bindings */
            table.bindAggregation("columns", "/dataStructures/Actor", function (sId, dataModel) {
                var columnId = dataModel.getObject().field;
                return new sap.m.Column(sId + "-column", {
                    header: new sap.m.Text({ text: columnId })
                });
            });
            var columns = table.getAggregation("columns");
            table.bindItems(path, function (sId, context) {
                var obj = context.getObject();
                var row = new sap.m.ColumnListItem(sId + "-cell");
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
        };
        ActorView.prototype.movieSelected = function (event) {
            /* Retrieve item selected */
            var item = event.getParameter("listItems")[0];
            this._controller.movieSelected(item);
        };
        ActorView.prototype.navigateBack = function (event) {
            this._controller.navigateBack();
        };
        ActorView.prototype.applyStyles = function () {
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
        };
        return ActorView;
    })();
    Actors.ActorView = ActorView;
})(Actors || (Actors = {}));
sap.ui.jsview("src.content.actors.actor", new Actors.ActorView());
