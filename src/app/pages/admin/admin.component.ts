import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(protected dataServices: DataService) {
    this.listItem = this.dataServices.listItem;
  }
  listItem: Item[] = [];
}
