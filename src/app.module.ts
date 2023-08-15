import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLModule } from '@nestjs/graphql';
import { UserQueriesController } from './user-queries/user-queries.controller';
import { UserQueriesService } from './user-queries/user-queries.service';
import { UserQueriesModule } from './user-queries/user-queries.module';
import { ExternalQueriesModule } from './external-queries/external-queries.module';
import { ApolloDriver } from '@nestjs/apollo';
import { FileDownloadModule } from './file-download/file-download.module';
import * as path from 'path';
import * as process from 'process';

@Module({
  imports: [
    UserQueriesModule,
    ExternalQueriesModule,
    ServeStaticModule.forRoot({
      rootPath: path.join(process.cwd(), 'static'),
      exclude: ['/graphql/(.*)'],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    FileDownloadModule,
  ],
  controllers: [UserQueriesController],
  providers: [UserQueriesService],
})
export class AppModule {}
