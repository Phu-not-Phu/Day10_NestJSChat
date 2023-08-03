import { Component, Input } from '@angular/core';
import { CatFact } from 'src/app/models/cat-facts.model';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent {
  @Input()
  fact!: CatFact;
}
