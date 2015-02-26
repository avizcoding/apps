module infrastructure.Data {

    /* INTERFACES */
    export interface IDataLoader {
        Run(dataService: IDataService, dataResponse: any, callback: (response: any) => void);
    }

    export interface IDataLoaderResponse {
        DataModel: any;
        ErrorMsg: string;
        Successful: boolean;
    }

    /* CLASSES */
    export class DataLoader implements IDataLoader {
        public Run(dataService: IDataService, dataResponse: any, callback: (response: any) => void, payload: any = {}) {
            var url: string = payload.url;

            dataService.getData(url, (response) => {
                callback(response);
            }, payload);
        }
    }

    export class DataLoaderResponse implements IDataLoaderResponse {
        public DataModel: any;
        public ErrorMsg: string;
        public Successful: boolean;
    }
}