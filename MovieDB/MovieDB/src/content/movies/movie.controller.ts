module Movies {

    export class MovieController {

        private _eventAggregator: infrastructure.EventAggregator.IEventAggregator;
        private _callbackRender: any;
        private _model: any;

        public init(...args: any[]): void {
            this._callbackRender = args[0];
            this._eventAggregator = args[1];
        }

        public onAfterRendering(): void {
            this._callbackRender();
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

        public navigateBack(): void {
            this._eventAggregator.publish("movieDB", "navigateBack", null);
        }

    }

}
sap.ui.controller("src.content.movies.movie", new Movies.MovieController()); 
 