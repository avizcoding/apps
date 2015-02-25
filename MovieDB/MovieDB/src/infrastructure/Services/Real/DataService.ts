jQuery.sap.require("movieDB.src.infrastructure.Data.IDataService");
module services {

    export class ActorDataService implements infrastructure.Data.IDataService {
        public getData(url: string, callback: (response: any) => void, payload: any = {}) {
            url = url + "&name=" + payload.ACTOR;
            infrastructure.Context.AjaxCaller.Run(url, "GET", {}, "application/text-plain; charset= utf - 8",
                "text", true, false, (response: any) => {
                    callback(response);
                });
        }
    }

    export class MovieDataService implements infrastructure.Data.IDataService {
        public getData(url: string, callback: (response: any) => void, payload: any = {}) {
            url = url + "&title=" + payload.TITLE;
            infrastructure.Context.AjaxCaller.Run(url, "GET", {}, "application/text-plain; charset= utf - 8",
                "text", true, false, (response: any) => {
                    callback(response);
                });
        }
    }

    export class MovieDataByIdService implements infrastructure.Data.IDataService {
        public getData(url: string, callback: (response: any) => void, payload: any = {}) {
            url = url + "&idIMDB=" + payload.IMDBID;
            infrastructure.Context.AjaxCaller.Run(url, "GET", {}, "application/text-plain; charset= utf - 8",
                "text", true, false, (response: any) => {
                    callback(response);
                });
        }
    }
} 