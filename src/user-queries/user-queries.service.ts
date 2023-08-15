import { Injectable } from '@nestjs/common';
import { PictureParamsArgs } from './dto/picture-params.args';
import { ExternalQueriesService } from '../external-queries/external-queries.service';
import { PictureModel } from './models/picture.model';
import { CreatePictureInput } from './input/createPictureInput';

@Injectable()
export class UserQueriesService {
  allPicturesCache: Map<CreatePictureInput, PictureModel> = new Map<
    CreatePictureInput,
    PictureModel
  >();

  constructor(readonly externalQueriesService: ExternalQueriesService) {}

  async getPicture(pictureParams: CreatePictureInput): Promise<PictureModel> {
    if (this.allPicturesCache.has(pictureParams)) {
      return this.allPicturesCache.get(pictureParams);
    }
    return this.createPicture(pictureParams);
  }

  async createPicture(
    createPictureInput: CreatePictureInput,
  ): Promise<PictureModel> {
    const { width, option1, option2 } = createPictureInput;
    const fileName = await this.externalQueriesService.downloadImage(
      width,
      option1,
      option2,
      );
    const picture: PictureModel = {
      fileName,
    };
    this.allPicturesCache.set(createPictureInput, picture);
    return picture;
  }
}
