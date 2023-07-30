import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, MdbCarouselModule],
})
export class HomeModule {}
