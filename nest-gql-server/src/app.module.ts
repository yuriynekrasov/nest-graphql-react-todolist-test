import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TodosController } from './app.controller';
import TodosService from './todos.service';
import { TodoResolver } from "./todo.resolver";

@Module({
  imports: [ GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    resolverValidationOptions: {
      requireResolversForResolveType: 'ignore'
    },
  }),
  TodoResolver
  ],
})
export class AppModule {}
