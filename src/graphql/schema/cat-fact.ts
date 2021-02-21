import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CatFact {
  @Field(() => ID)
  id: string;

  @Field()
  text: string;
}
