import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CatFact } from 'src/app/models/cat-facts.model';
import { CatFactAction } from 'src/ngrx/actions/cat-fact.action';
import { CatFactState } from 'src/ngrx/states/cat-fact.state';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss'],
})
export class CatFactsComponent implements OnInit{
  listFacts$: Observable<CatFact[]>;
  constructor(private store: Store<{ catFact: CatFactState }>) {
    this.listFacts$ = store.select((state) => state.catFact.catFacts);
  }

  ngOnInit(): void {
    this.getCatFacts();
  }

 async getCatFacts() {
    this.store.dispatch(CatFactAction.loadCatFacts());
  }
}
