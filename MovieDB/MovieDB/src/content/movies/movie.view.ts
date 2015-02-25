jQuery.sap.require("movieDB.src.infrastructure.Services.Mock.MockDataService");
module Movies {

    export class MovieView {

        private _controller: any;
        private _moviePage: any;
        private _layout: any;

        public getControllerName(): string {
            return "src.content.movies.movie";
        }

        public createContent(controller: MovieController) {

            this._controller = controller;

            var onRender = (() => {
            });

            this._controller.init(onRender, infrastructure.EventAggregator.SapEventAggregator.singleton);

            this._moviePage = new sap.m.Page();
            this._moviePage.setShowNavButton(true);
            this._moviePage.attachNavButtonPress(this.navigateBack, this);

            this._layout = new sap.ui.commons.layout.VerticalLayout();

            this._moviePage.addContent(this._layout);
            return this._moviePage;
        }

        public setModel(model: any): void {
            this._controller.setModel(model);
            this._moviePage.setTitle(this._controller.getModel().getProperty("/data/title"));
        }

        private navigateBack(event): void {
            this._controller.navigateBack();
        }
    }

}

sap.ui.jsview("src.content.movies.movie", new Movies.MovieView());