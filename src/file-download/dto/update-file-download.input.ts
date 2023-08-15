import { CreateFileDownloadInput } from './create-file-download.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFileDownloadInput extends PartialType(CreateFileDownloadInput) {
  @Field(() => Int)
  id: number;
}
