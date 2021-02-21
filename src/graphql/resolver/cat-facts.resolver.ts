import { Query, Resolver } from '@nestjs/graphql';
import fetch from 'node-fetch';

import { CatFact } from '../schema/cat-fact';

@Resolver(() => CatFact)
export class CatFactsResolver {
  @Query(() => [CatFact])
  async catFacts(): Promise<CatFact[]> {
    const response = await fetch('https://cat-fact.herokuapp.com/facts');
    const rawFacts = await response.json();
    return rawFacts.map(({ _id, text }) => ({
      id: _id,
      text,
    }));
  }
}
