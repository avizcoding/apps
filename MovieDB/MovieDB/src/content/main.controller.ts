module Main {

    export class MainController {

        private _eventAggregator: infrastructure.EventAggregator.IEventAggregator;
        private _callbackRender: any;
        private _callbackActorData: any;
        private _callbackMovieData: any;
        private _callbackNavigateBack: any;
        private _model: any;
        private _dataLoader: infrastructure.Data.IDataLoader;

        public init(...args: any[]): void {
            this._callbackRender = args[0];
            this._eventAggregator = args[1];
            this._callbackActorData = args[2];
            this._callbackMovieData = args[3];
            this._callbackNavigateBack = args[4];

            this._eventAggregator.subscribe("movieDB", "getMovieData", this.getMovieInfo, this);
            this._eventAggregator.subscribe("movieDB", "navigateBack", this.navigateBack, this);

            this._dataLoader = infrastructure.Context.DataLoader;
        }

        public onAfterRendering(): void {
            this._callbackRender();
        }

        public onExit(): void {
            this._eventAggregator.unsubscribe("movieDB", "getMovieInfo", null, this);
            this._eventAggregator.unsubscribe("movieDB", "navigateBack", null, this);
        }

        public getData(inputData: {}): void {
            var payload: {} = {};
            for (var prop in inputData) {
                if (prop == "Actor") {
                    payload["ACTOR"] = inputData[prop];
                    payload["url"] = Constants.Constants.actorDataUrl;
                    this.getActorData(this._callbackActorData, payload);
                } else if (prop == "Movie") {
                    payload["TITLE"] = inputData[prop];
                    payload["url"] = Constants.Constants.movieDataUrl;
                    this.getMovieData(this._callbackMovieData, payload);
                }
            }
        }

        public getActorData(callback: () => {}, payload: {}) {
            if (infrastructure.Context.IsModeTest) {
                infrastructure.Context.DataLoader.Run(new services.MockActorDataService(), new infrastructure.Data.DataLoaderResponse(), callback, payload);
            } else {
                infrastructure.Context.DataLoader.Run(new services.ActorDataService(), new infrastructure.Data.DataLoaderResponse(), callback, payload);
            }
        }

        public getMovieData(callback: () => {}, payload: {}) {
            if (infrastructure.Context.IsModeTest) {
                infrastructure.Context.DataLoader.Run(new services.MockMovieDataService(), new infrastructure.Data.DataLoaderResponse(), callback, payload);
            } else {
                if (payload["TITLE"] != null && payload["TITLE"] != "") {
                    payload["url"] = Constants.Constants.movieDataUrl;
                    infrastructure.Context.DataLoader.Run(new services.MovieDataService(), new infrastructure.Data.DataLoaderResponse(), callback, payload);
                } else if (payload["IMDBID"] != null && payload["IMDBID"] != "") {
                    payload["url"] = Constants.Constants.movieDataByIdUrl; 
                    infrastructure.Context.DataLoader.Run(new services.MovieDataByIdService(), new infrastructure.Data.DataLoaderResponse(), callback, payload);
                }
            }
        }

        public setModel(model: any): void {
            if (this._model == null) {
                this._model = new sap.ui.model.json.JSONModel();
            }
            this._model.setData(model);
        }

        public getModel(): any {
            return this._model;
        }

        private getMovieInfo(channel: string, event: string, payload: string): any {
            this.getMovieData(this._callbackMovieData, payload);
        }

        private navigateBack(channel: string, event: string, payload: string): any {
            this._callbackNavigateBack();
        }

    }

}
sap.ui.controller("src.content.main", new Main.MainController()); 
