import { HttpService } from '@nestjs/axios';
export declare class ExternalQueriesService {
    private readonly httpService;
    constructor(httpService: HttpService);
    downloadImage(width: number, option1: number | string, option2: number | string): Promise<string>;
}
