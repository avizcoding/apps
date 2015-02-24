module infrastructure.Data {
    export interface IDataServiceResponse<T> {
        hasError: boolean;
        error: string;
        data: T;
    }
} 