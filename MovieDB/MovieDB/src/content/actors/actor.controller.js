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
        ActorController.prototype.itemSelected = function (item) {
            this._model.setProperty("/selectedItem", item);
            this._eventAggregator.publish("movieDB", "getMovieInfo", item);
        };
        return ActorController;
    })();
    Actors.ActorController = ActorController;
})(Actors || (Actors = {}));
sap.ui.controller("src.content.actors.actor", new Actors.ActorController());
