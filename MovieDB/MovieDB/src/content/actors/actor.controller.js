var Actors;
(function (Actors) {
    var ActorController = (function () {
        function ActorController() {
        }
        ActorController.prototype.init = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            this._callbackRender = args[0];
            this._eventAggregator = args[1];
        };
        ActorController.prototype.onAfterRendering = function () {
            this._callbackRender();
        };
        ActorController.prototype.setModel = function (model) {
            if (this._model == null) {
                this._model = new sap.ui.model.json.JSONModel();
            }
            this._model.setData(model);
            this.setFilmographyModel();
        };
        ActorController.prototype.getModel = function () {
            return this._model;
        };
        ActorController.prototype.setFilmographyModel = function () {
            var filmographies = this._model.getProperty("/data/filmographies");
            this._model.setProperty("/dataStructures", {});
            for (var i = 0; i < filmographies.length; i++) {
                var section = filmographies[i].section;
                var fields = [];
                for (var prop in filmographies[i].filmography[0]) {
                    if (prop != "IMDBId") {
                        fields.push({ field: prop });
                    }
                }
                this._model.setProperty("/dataStructures/" + section, fields);
            }
        };
        ActorController.prototype.movieSelected = function (item) {
            this._model.setProperty("/selectedItem", item);
            /* The filmography section is identified in the id of the item by section + FilmographyTable */
            var section = item.sId.substring(0, item.sId.indexOf("FilmographyTable"));
            /* Find the column position that corresponds to the title */
            var dataStructure = this._model.getProperty("/dataStructures/" + section);
            for (var i = 0; i < dataStructure.length; i++) {
                if (dataStructure[i].field == "title") {
                    var index = i;
                    break;
                }
            }
            /* Get the title text and publish an event to get the movie data */
            var cells = item.getCells();
            var movie = cells[index].getProperty("text");
            this._eventAggregator.publish("movieDB", "getMovieData", { TITLE: movie });
        };
        return ActorController;
    })();
    Actors.ActorController = ActorController;
})(Actors || (Actors = {}));
sap.ui.controller("src.content.actors.actor", new Actors.ActorController());
