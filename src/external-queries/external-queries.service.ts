import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ExternalQueriesService {
  constructor(private readonly httpService: HttpService) {}

  async downloadImage(
    width: number,
    option1: number | string,
    option2: number | string,
  ): Promise<string> {
    const fileName = v4() + '.svg';
    // console.log(fileName);
    // console.log(__dirname);
    const writer = fs.createWriteStream(
      // path.resolve(__dirname, '..', '..', 'static', fileName),
      path.resolve(process.cwd(), 'static', fileName),
    );

    let fileUrl = 'https://placekeanu.com/' + width;
    if (option1) {
      fileUrl += '/' + option1;
    }
    if (option2) {
      fileUrl += '/' + option2;
    }

    const response = await this.httpService.axiosRef({
      // url: 'https://placekeanu.com/300',
      url: fileUrl,
      method: 'GET',
      responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      resolve(fileName);
      writer.on('error', reject);
      reject(fileName);
    });
  }

}
