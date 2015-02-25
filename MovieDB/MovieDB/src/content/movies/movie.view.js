jQuery.sap.require("movieDB.src.infrastructure.Services.Mock.MockDataService");
var Movies;
(function (Movies) {
    var MovieView = (function () {
        function MovieView() {
        }
        MovieView.prototype.getControllerName = function () {
            return "src.content.movies.movie";
        };
        MovieView.prototype.createContent = function (controller) {
            this._controller = controller;
            var onRender = (function () {
            });
            this._controller.init(onRender, infrastructure.EventAggregator.SapEventAggregator.singleton);
            this._moviePage = new sap.m.Page();
            this._moviePage.setShowNavButton(true);
            this._moviePage.attachNavButtonPress(this.navigateBack, this);
            this._layout = new sap.ui.commons.layout.VerticalLayout();
            this._moviePage.addContent(this._layout);
            return this._moviePage;
        };
        MovieView.prototype.setModel = function (model) {
            this._controller.setModel(model);
            console.log(this._controller.getModel());
            this._moviePage.setTitle(this._controller.getModel().getProperty("/data/title"));
        };
        MovieView.prototype.navigateBack = function (event) {
            this._controller.navigateBack();
        };
        return MovieView;
    })();
    Movies.MovieView = MovieView;
})(Movies || (Movies = {}));
sap.ui.jsview("src.content.movies.movie", new Movies.MovieView());
