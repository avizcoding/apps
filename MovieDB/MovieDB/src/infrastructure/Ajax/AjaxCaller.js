var infrastructure;
(function (infrastructure) {
    var Ajax;
    (function (Ajax) {
        var AjaxCaller = (function () {
            function AjaxCaller() {
            }
            AjaxCaller.prototype.Run = function (url, verb, data, contentType, datatype, async, cache, callback) {
                if (verb === void 0) { verb = "GET"; }
                if (data === void 0) { data = {}; }
                if (contentType === void 0) { contentType = "application/text-plain; charset= utf - 8"; }
                if (datatype === void 0) { datatype = "text"; }
                if (async === void 0) { async = true; }
                if (cache === void 0) { cache = false; }
                if (callback === void 0) { callback = function () {
                }; }
                $.ajax({
                    url: url,
                    type: verb,
                    crossDomain: true,
                    contentType: contentType,
                    dataType: datatype,
                    data: data,
                    async: async,
                    cache: cache,
                    success: function (result) {
                        callback({ data: result, hasError: false, error: "" });
                    },
                    error: function (xmlHttpRequest, textStatus, errorThrown) {
                        callback({
                            data: null,
                            hasError: true,
                            error: "Se ha producido el siguiente error al obtener los datos: " + errorThrown
                        });
                    },
                });
            };
            AjaxCaller.prototype.getJson = function (url, callback) {
                $.ajaxSetup({
                    async: true
                });
                $.getJSON(url, {}).done(function (json) {
                    callback({ data: json, hasError: false, error: "" });
                }).fail(function (jqxhr, textStatus, err) {
                    callback({
                        data: null,
                        hasError: true,
                        error: "Se ha producido el siguiente error al obtener la configuración: " + err
                    });
                });
            };
            return AjaxCaller;
        })();
        Ajax.AjaxCaller = AjaxCaller;
    })(Ajax = infrastructure.Ajax || (infrastructure.Ajax = {}));
})(infrastructure || (infrastructure = {}));
