import { Resolver, Query, Args, Mutation, Int } from "@nestjs/graphql";
import { UserQueriesService } from './user-queries.service';
import { PictureModel } from './models/picture.model';
import { CreatePictureInput } from './input/createPictureInput';

@Resolver(of => PictureModel)
export class UserQueriesResolver {
  constructor(private readonly userQueriesService: UserQueriesService) {}

  //@Query(() => CreatePictureInput, { name: 'picture', nullable: true })
  @Query(returns => PictureModel)
  async getPicture(
    @Args('pictureParamsModel', { type: () => CreatePictureInput })
    pictureParamsModel: CreatePictureInput,
  ): Promise<PictureModel> {
    return this.userQueriesService.getPicture(pictureParamsModel);
  }

  @Mutation(returns => PictureModel)
  async createPicture(
    @Args('createPictureInput') createPictureInput: CreatePictureInput,
  ) {
    return this.userQueriesService.createPicture(createPictureInput);
  }
}
