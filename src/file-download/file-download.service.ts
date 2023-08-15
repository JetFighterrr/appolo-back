import { Injectable } from '@nestjs/common';
import { CreateFileDownloadInput } from './dto/create-file-download.input';
import { UpdateFileDownloadInput } from './dto/update-file-download.input';

@Injectable()
export class FileDownloadService {
  create(createFileDownloadInput: CreateFileDownloadInput) {
    return 'This action adds a new fileDownload';
  }

  findAll() {
    return `This action returns all fileDownload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileDownload`;
  }

}
