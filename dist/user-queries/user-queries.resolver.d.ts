import { UserQueriesService } from './user-queries.service';
import { PictureModel } from './models/picture.model';
import { CreatePictureInput } from './input/createPictureInput';
export declare class UserQueriesResolver {
    private readonly userQueriesService;
    constructor(userQueriesService: UserQueriesService);
    getPicture(pictureParamsModel: CreatePictureInput): Promise<PictureModel>;
    createPicture(createPictureInput: CreatePictureInput): Promise<PictureModel>;
}
