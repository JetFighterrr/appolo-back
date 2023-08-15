import { Stream } from 'stream';

export interface FileUpload {
  fileName: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}