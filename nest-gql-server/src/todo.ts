import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(type => Int)
  id: number;

  @Field(type => String, { name: 'registeredAt' })
  title: string;

  @Field(type => Boolean)
  status: boolean;
}