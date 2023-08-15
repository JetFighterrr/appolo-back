import { ExternalQueriesService } from '../external-queries/external-queries.service';
import { PictureModel } from './models/picture.model';
import { CreatePictureInput } from './input/createPictureInput';
export declare class UserQueriesService {
    readonly externalQueriesService: ExternalQueriesService;
    allPicturesCache: Map<CreatePictureInput, PictureModel>;
    constructor(externalQueriesService: ExternalQueriesService);
    getPicture(pictureParams: CreatePictureInput): Promise<PictureModel>;
    createPicture(createPictureInput: CreatePictureInput): Promise<PictureModel>;
}
