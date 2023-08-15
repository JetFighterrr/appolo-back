import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FileDownloadService } from './file-download.service';
import { FileDownload } from './entities/file-download.entity';
import { CreateFileDownloadInput } from './dto/create-file-download.input';
import { UpdateFileDownloadInput } from './dto/update-file-download.input';

@Resolver(() => FileDownload)
export class FileDownloadResolver {
  constructor(private readonly fileDownloadService: FileDownloadService) {}

  @Query(() => [FileDownload], { name: 'fileDownload' })
  findAll() {
    return this.fileDownloadService.findAll();
  }

  @Query(() => FileDownload, { name: 'fileDownload' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fileDownloadService.findOne(id);
  }
}
