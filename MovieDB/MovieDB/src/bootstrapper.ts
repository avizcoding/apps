/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
jQuery.sap.require("movieDB.src.infrastructure.Context.Context");
var sap: any;
class Bootstrapper {

    public static init() {
        sap.ui.localResources("src");

        sap.ui.getCore().attachInitEvent(() => {
            infrastructure.Context.Initialize();
            var view = sap.ui.view("mainView", { type: sap.ui.core.mvc.ViewType.JS, viewName: "src.content.actors.actor", height: "100%" });
            view.placeAt("content");
        });

        sap.ui.getCore().boot();
    }

}

Bootstrapper.init();