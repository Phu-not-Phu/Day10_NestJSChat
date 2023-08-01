import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input()
  item!: Item;
  carts: Item[] = [];

  constructor(public dataService: DataService) {}

  addToCart() {
    let index = this.dataService.itemsCart.findIndex((cart) => {
      return cart.id == this.item.id;
    });

    let indexList = this.dataService.listItem.findIndex((list) => {
      return list.id == this.item.id;
    });

    if (this.item.inStock! <= 0) {
      alert('Xin lỗi! Đã hết hàng.');
    } else {
      this.dataService.addToCartTest(index, indexList);
    }
  }
}
