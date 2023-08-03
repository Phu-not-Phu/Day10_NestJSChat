import { createAction } from '@ngrx/store';
import { CatFact } from 'src/app/models/cat-facts.model';

export const CatFactAction = {
  loadCatFacts: createAction('[CatFact] Load CatFacts'),
  loadCatFactsSuccess: createAction(
    '[CatFact] Load CatFacts Success',
    (catFacts: CatFact[]) => ({ catFacts })
  ),
  loadCatFactsFailure: createAction(
    '[CatFact] Load CatFacts Failure',
    (error: string) => ({ error })
  ),
};
