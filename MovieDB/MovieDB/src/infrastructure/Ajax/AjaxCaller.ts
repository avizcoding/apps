module infrastructure.Ajax {

    export class AjaxCaller {
        
        public Run(url: string, verb: string = "GET", data: any = {}, contentType: string = "application/text-plain; charset= utf - 8", datatype: string = "text",
            async: boolean = true, cache: boolean = false,
            callback: (response: infrastructure.Data.IDataServiceResponse<any>) => void = () => { }): void {

            $.ajax({
                url: url,
                type: verb,
                crossDomain: true,
                contentType: contentType,
                dataType: datatype,
                data: data,
                async: async,
                cache: cache,
                success: (result) => {
                    callback({ data: result, hasError:false, error:""});
                },
                error: (xmlHttpRequest, textStatus, errorThrown) => {
                    callback({
                        data: null,
                        hasError: true,
                        error: "Se ha producido el siguiente error al obtener los datos: " + errorThrown
                    });
                },
            });

        }

        public getJson(url: string, callback: (response: infrastructure.Data.IDataServiceResponse<any>) => void): void {

            $.ajaxSetup({
                async: true
            });

            $.getJSON(url, {})
                .done((json) => {
                    callback({ data: json, hasError: false, error:"" });
                })
                .fail((jqxhr, textStatus, err) => {
                callback({
                        data: null, hasError: true,
                        error: "Se ha producido el siguiente error al obtener la configuración: " + err
                    });
                }); 

        }

    }
} 