import { createReducer, on } from '@ngrx/store';
import { CatFactAction } from '../actions/cat-fact.action';
import { CatFactState } from '../states/cat-fact.state';

export const initialState: CatFactState = {
  catFacts: [],
  isLoading: false,
  error: "",
};

export const catFactReducer = createReducer(
  initialState,
  on(CatFactAction.loadCatFacts, (state) => ({ ...state, isLoading: true })),
  on(CatFactAction.loadCatFactsSuccess, (state, { catFacts }) => ({
    ...state,
    catFacts,
    isLoading: false,
  })),
  on(CatFactAction.loadCatFactsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
