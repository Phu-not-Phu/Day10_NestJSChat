import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CatFactAction } from '../actions/cat-fact.action';
import { CatFactsService } from 'src/app/services/cat-facts.service';
import { switchMap, map, catchError } from 'rxjs';
import { of } from 'rxjs';
import { CatFact } from 'src/app/models/cat-facts.model';

@Injectable()
export class CatFactEffect {
  constructor(private actions$: Actions, private catSv: CatFactsService) {
  }

  loadCatFacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatFactAction.loadCatFacts),
      switchMap(() =>
        this.catSv.getCatFact(140, 9).pipe(
          switchMap((catFacts: any) => {
            return this.catSv.getCatPic(9).pipe(
              map((catPics: any) => {
                catFacts = catFacts['data'].map(
                  (catFact: CatFact, index: number) => {
                    return { ...catFact, imgURL: catPics[index].url };
                  }
                );
                console.log(catFacts);
                return CatFactAction.loadCatFactsSuccess(catFacts);
              }),
              catchError((error: string) => {
                return of(CatFactAction.loadCatFactsFailure(error));
              })
            );
          })
        )
      )
    )
  );
}
