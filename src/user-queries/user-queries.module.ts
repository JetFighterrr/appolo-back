import { Module } from '@nestjs/common';
import { UserQueriesResolver } from './user-queries.resolver';
import { UserQueriesService } from './user-queries.service';
// import { ExternalQueriesService } from '../external-queries/external-queries.service';
import { ExternalQueriesModule } from '../external-queries/external-queries.module';

@Module({
  providers: [UserQueriesResolver, UserQueriesService],
  imports: [ExternalQueriesModule],
  exports: [UserQueriesService],
})
export class UserQueriesModule {}
