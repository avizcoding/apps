module Actors {

    export class ActorController {

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
            this.setFilmographyModel();
        }

        public getModel(): any {
            return this._model;
        }

        private setFilmographyModel(): void {
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
        }

        public movieSelected(item: any): void {
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
        }
    }

}

sap.ui.controller("src.content.actors.actor", new Actors.ActorController()); 