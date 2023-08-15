import { ExternalQueriesService } from './external-queries.service';
export declare class ExternalQueriesController {
    readonly externalQueriesService: ExternalQueriesService;
    constructor(externalQueriesService: ExternalQueriesService);
    downloadImage(width: number, option1: number | string, option2: number | string): Promise<string>;
}
