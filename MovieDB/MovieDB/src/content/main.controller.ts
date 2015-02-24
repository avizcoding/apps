module Main {

    export class MainController {

        private _eventAggregator: infrastructure.EventAggregator.IEventAggregator;
        private _callbackRender: any;
        private _callbackMovieData: any;
        private _callbackNavigateBack: any;
        private _model: any;
        private _dataLoader: infrastructure.Data.IDataLoader;

        public init(...args: any[]): void {
            this._callbackRender = args[0];
            this._eventAggregator = args[1];
            this._callbackMovieData = args[2];
            this._callbackNavigateBack = args[3];

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
                payload["url"] = Constants.Constants.movieDataUrl;
                infrastructure.Context.DataLoader.Run(new services.MovieDataService(), new infrastructure.Data.DataLoaderResponse(), callback, payload);
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
