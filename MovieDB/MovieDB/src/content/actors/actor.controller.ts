module Actors {
    export class ActorController {

        private _callbackRender: any;
        private _model: any;

        public init(...args: any[]): void {
            this._callbackRender = args[0];
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
                    fields.push({ field: prop });
                }

                this._model.setProperty("/dataStructures/" + section, fields);
            }
        }
    }
}

sap.ui.controller("src.content.actors.actor", new Actors.ActorController()); 