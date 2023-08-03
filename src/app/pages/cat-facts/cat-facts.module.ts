import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatCardComponent } from './components/cat-card/cat-card.component';

import { CatFactsRoutingModule } from './cat-facts-routing.module';
import { CatFactsComponent } from './cat-facts.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [CatFactsComponent, CatCardComponent],
  imports: [CommonModule, CatFactsRoutingModule, SharedModule],
})
export class CatFactsModule {}
