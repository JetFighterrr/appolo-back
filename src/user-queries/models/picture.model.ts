import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: 'The picture model' })
export class PictureModel {
  @Field( type => ID)
  fileName: string;
}