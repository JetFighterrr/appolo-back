import { Controller, Get, Param} from "@nestjs/common";
import { ExternalQueriesService } from './external-queries.service';
import { v4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
import { HttpService } from '@nestjs/axios';

@Controller('picture')
export class ExternalQueriesController {
  constructor(readonly externalQueriesService: ExternalQueriesService) {}
  // constructor(private readonly httpService: HttpService) {}

  @Get(':width/:option1/:option2|:width/:option1|:width')
  async downloadImage(
    @Param('width') width: number,
    @Param('option1') option1: number | string,
    @Param('option2') option2: number | string,
  ) {

    // const fileName = v4() + '.svg';
    // console.log(fileName);
    // console.log(__dirname);
    // const writer = fs.createWriteStream(
    //   path.resolve(__dirname, '..', '..', 'static', fileName),
    //   // path.resolve(process.cwd(), 'static', fileName),
    // );
    //
    // let fileUrl = 'https://placekeanu.com/' + width;
    // if (option1) {
    //   fileUrl += '/' + option1;
    // }
    // if (option2) {
    //   fileUrl += '/' + option2;
    // }
    //
    // const response = await this.httpService.axiosRef({
    //   // url: 'https://placekeanu.com/300',
    //   url: fileUrl,
    //   method: 'GET',
    //   responseType: 'stream',
    // });
    //
    // response.data.pipe(writer);
    //
    // return new Promise((resolve, reject) => {
    //   writer.on('finish', resolve);
    //   resolve(fileName);
    //   writer.on('error', reject);
    //   reject(fileName);
    // });
    return this.externalQueriesService.downloadImage(width, option1, option2);
  }
}
