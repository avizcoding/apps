var Movies;
(function (Movies) {
    var MovieController = (function () {
        function MovieController() {
        }
        MovieController.prototype.init = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            this._callbackRender = args[0];
            this._eventAggregator = args[1];
        };
        MovieController.prototype.onAfterRendering = function () {
            this._callbackRender();
        };
        MovieController.prototype.setModel = function (model) {
            if (this._model == null) {
                this._model = new sap.ui.model.json.JSONModel();
            }
            this._model.setData(model);
        };
        MovieController.prototype.getModel = function () {
            return this._model;
        };
        MovieController.prototype.navigateBack = function () {
            this._eventAggregator.publish("movieDB", "navigateBack", null);
        };
        return MovieController;
    })();
    Movies.MovieController = MovieController;
})(Movies || (Movies = {}));
sap.ui.controller("src.content.movies.movie", new Movies.MovieController());
