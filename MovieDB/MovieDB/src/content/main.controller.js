var Main;
(function (Main) {
    var MainController = (function () {
        function MainController() {
        }
        MainController.prototype.init = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            this._callbackRender = args[0];
            this._eventAggregator = args[1];
            this._callbackMovieInfo = args[2];
            this._callbackNavigateBack = args[3];
            this._eventAggregator.subscribe("movieDB", "getMovieInfo", this.getMovieInfo, this);
            this._eventAggregator.subscribe("movieDB", "navigateBack", this.navigateBack, this);
            this._dataLoader = infrastructure.Context.DataLoader;
        };
        MainController.prototype.onAfterRendering = function () {
            this._callbackRender();
        };
        MainController.prototype.onExit = function () {
            this._eventAggregator.unsubscribe("movieDB", "getMovieInfo", null, this);
            this._eventAggregator.unsubscribe("movieDB", "navigateBack", null, this);
        };
        MainController.prototype.setModel = function (model) {
            if (this._model == null) {
                this._model = new sap.ui.model.json.JSONModel();
            }
            this._model.setData(model);
        };
        MainController.prototype.getModel = function () {
            return this._model;
        };
        MainController.prototype.getMovieInfo = function (channel, event, payload) {
            this._dataLoader.Run(new services.MockMovieDataService(), "", this._callbackMovieInfo);
        };
        MainController.prototype.navigateBack = function (channel, event, payload) {
            this._callbackNavigateBack();
        };
        return MainController;
    })();
    Main.MainController = MainController;
})(Main || (Main = {}));
sap.ui.controller("src.content.main", new Main.MainController());
