import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class PictureParamsArgs {
  @Field( type => Int,{ name: 'width', nullable: false })
  readonly width: number;

  @Field({ name: 'height | option' })
  readonly option1?: string;

  @Field({ name: 'option' })
  readonly option2?: string;
}