import { Module } from '@nestjs/common';
import { ExternalQueriesService } from './external-queries.service';
import { ExternalQueriesController } from './external-queries.controller';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  providers: [ExternalQueriesService],
  controllers: [ExternalQueriesController],
  imports: [HttpModule],
  exports: [ExternalQueriesService],
})
export class ExternalQueriesModule {
  constructor(private readonly httpService: HttpService){}

  getPictureFromServer(){
    return this.httpService.get('https://placekeanu.com/300');
  }
}
