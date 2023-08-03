import { CatFact } from 'src/app/models/cat-facts.model';

export interface CatFactState {
  catFacts: CatFact[];
  isLoading: boolean;
  error: string;
}
