import { Field, InputType, Int } from "@nestjs/graphql";
//import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePictureInput {
  @Field(type => Int)
  width: number;
  
  @Field({ nullable: true })
  option1?: string;
  
  @Field({ nullable: true })
  option2?: string;
}