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
            this._callbackMovieData = args[2];
            this._callbackNavigateBack = args[3];
            this._eventAggregator.subscribe("movieDB", "getMovieData", this.getMovieInfo, this);
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
        MainController.prototype.getActorData = function (callback, payload) {
            if (infrastructure.Context.IsModeTest) {
                infrastructure.Context.DataLoader.Run(new services.MockActorDataService(), new infrastructure.Data.DataLoaderResponse(), callback, payload);
            }
            else {
                infrastructure.Context.DataLoader.Run(new services.ActorDataService(), new infrastructure.Data.DataLoaderResponse(), callback, payload);
            }
        };
        MainController.prototype.getMovieData = function (callback, payload) {
            if (infrastructure.Context.IsModeTest) {
                infrastructure.Context.DataLoader.Run(new services.MockMovieDataService(), new infrastructure.Data.DataLoaderResponse(), callback, payload);
            }
            else {
                payload["url"] = Constants.Constants.movieDataUrl;
                console.log(payload);
                infrastructure.Context.DataLoader.Run(new services.MovieDataService(), new infrastructure.Data.DataLoaderResponse(), callback, payload);
            }
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
            this.getMovieData(this._callbackMovieData, payload);
        };
        MainController.prototype.navigateBack = function (channel, event, payload) {
            this._callbackNavigateBack();
        };
        return MainController;
    })();
    Main.MainController = MainController;
})(Main || (Main = {}));
sap.ui.controller("src.content.main", new Main.MainController());
