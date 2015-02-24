jQuery.sap.require("movieDB.src.infrastructure.Data.DataLoader");
jQuery.sap.require("movieDB.src.infrastructure.Ajax.AjaxCaller");
var infrastructure;
(function (infrastructure) {
    var Context = (function () {
        function Context() {
        }
        Context.Initialize = function () {
            this.buildParams();
        };
        Object.defineProperty(Context, "DataLoader", {
            get: function () {
                return this._dataLoader;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Context, "Params", {
            get: function () {
                return this._params;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Context, "AjaxCaller", {
            get: function () {
                return this._ajaxCaller;
            },
            enumerable: true,
            configurable: true
        });
        Context.buildParams = function () {
            var queryString = location.search.substring(1);
            var params = queryString.split("&");
            var test = {};
            for (var i = 0; i < params.length; i++) {
                var chain = params[i];
                var variable = chain.split("=")[0];
                var value = chain.split("=")[1];
                if (variable != null)
                    this._params[variable.toUpperCase()] = value;
            }
        };
        Object.defineProperty(Context, "IsModeTest", {
            get: function () {
                var mode = infrastructure.Context.Params["MODE"];
                if (mode != null)
                    return (mode.toUpperCase() == "TEST" || mode.toUpperCase() == "MOCK");
                else {
                    return false;
                }
            },
            enumerable: true,
            configurable: true
        });
        Context._dataLoader = new infrastructure.Data.DataLoader();
        Context._ajaxCaller = new infrastructure.Ajax.AjaxCaller();
        Context._params = {};
        return Context;
    })();
    infrastructure.Context = Context;
    Context.Initialize();
})(infrastructure || (infrastructure = {}));
