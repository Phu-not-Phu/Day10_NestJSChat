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

  constructor(protected dataService: DataService) {}

  addToCart() {
    let index = this.dataService.itemsCart.findIndex((cart) => {
      return cart.id == this.item.id;
    });

    if (this.item.inStock! <= 0) {
      alert('Xin lỗi! Đã hết hàng.');
    } else {
      if (index === -1) {
        this.item.quantity = 1;
        this.item.inStock -= 1;

        this.dataService.addToCart(this.item);
      } else {
        this.dataService.moreItemToCart(index);
        this.item.inStock -= 1;
      }
      alert('Thành công bỏ vào giỏ hàng.');
    }
  }
}
