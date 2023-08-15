import { HttpService } from '@nestjs/axios';
export declare class ExternalQueriesModule {
    private readonly httpService;
    constructor(httpService: HttpService);
    getPictureFromServer(): import("rxjs").Observable<import("axios").AxiosResponse<any, any>>;
}
