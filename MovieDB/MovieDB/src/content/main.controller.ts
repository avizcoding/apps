module Main {

    export class MainController {

        private _eventAggregator: infrastructure.EventAggregator.IEventAggregator;
        private _callbackRender: any;
        private _callbackMovieInfo: any;
        private _callbackNavigateBack: any;
        private _model: any;
        private _dataLoader: infrastructure.Data.IDataLoader;

        public init(...args: any[]): void {
            this._callbackRender = args[0];
            this._eventAggregator = args[1];
            this._callbackMovieInfo = args[2];
            this._callbackNavigateBack = args[3];

            this._eventAggregator.subscribe("movieDB", "getMovieInfo", this.getMovieInfo, this);
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
            this._dataLoader.Run(new services.MockMovieDataService(), "", this._callbackMovieInfo);
        }

        private navigateBack(channel: string, event: string, payload: string): any {
            this._callbackNavigateBack();
        }

    }

}
sap.ui.controller("src.content.main", new Main.MainController()); 
