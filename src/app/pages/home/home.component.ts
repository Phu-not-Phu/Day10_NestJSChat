import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  listItem: Item[] = [];
  constructor(public dataServices: DataService) {
    this.listItem = this.dataServices.listItem;
  }
}
