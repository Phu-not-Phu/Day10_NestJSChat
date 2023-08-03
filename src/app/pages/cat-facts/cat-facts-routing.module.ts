import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatFactsComponent } from './cat-facts.component';

const routes: Routes = [{ path: '', component: CatFactsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatFactsRoutingModule { }
