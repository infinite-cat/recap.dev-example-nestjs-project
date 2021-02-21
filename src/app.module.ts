import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatFactsResolver } from './graphql/resolver/cat-facts.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppService,
    },
    CatFactsResolver,
    {
      provide: 'test',
      useValue: 'test',
    },
  ],
})
export class AppModule {}
