import { InputType, Int, Field } from '@nestjs/graphql';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { FileUpload } from "../file-upload";


@InputType()
export class CreateFileDownloadInput {
  @Field(() => String)
  name: string;
  @Field(() => String)
  breed: string;
  @Field(() => GraphQLUpload)
  image: Promise<FileUpload>;
}
