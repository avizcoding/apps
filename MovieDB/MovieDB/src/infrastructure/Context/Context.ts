jQuery.sap.require("movieDB.src.infrastructure.Data.DataLoader");
jQuery.sap.require("movieDB.src.infrastructure.Ajax.AjaxCaller");

module infrastructure {
    export class Context {
        private static _dataLoader: infrastructure.Data.IDataLoader = new infrastructure.Data.DataLoader();
        private static _ajaxCaller: infrastructure.Ajax.AjaxCaller = new infrastructure.Ajax.AjaxCaller();
        private static _params: {} = {};

        public static Initialize() {
            this.buildParams();
        }

        public static get DataLoader(): any {
            return this._dataLoader;
        }

        public static get Params(): {} {
            return this._params;
        }

        public static get AjaxCaller(): infrastructure.Ajax.AjaxCaller {
            return this._ajaxCaller;
        }

        private static buildParams(): void {
            var queryString: string = location.search.substring(1);
            var params = queryString.split("&");
            var test: any = {};
            for (var i = 0; i < params.length; i++) {
                var chain = params[i];
                var variable = chain.split("=")[0];
                var value = chain.split("=")[1];

                if (variable != null)
                    this._params[variable.toUpperCase()] = value;
            }
        }

        public static get IsModeTest(): boolean {
            var mode: string = infrastructure.Context.Params["MODE"];
            if (mode != null)
                return (mode.toUpperCase() == "TEST" || mode.toUpperCase() == "MOCK");
            else {
                return false;
            }

        }
    }

    Context.Initialize();
}