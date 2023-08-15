import { Module } from '@nestjs/common';
import { FileDownloadService } from './file-download.service';
import { FileDownloadResolver } from './file-download.resolver';

@Module({
  providers: [FileDownloadResolver, FileDownloadService],
})
export class FileDownloadModule {}
