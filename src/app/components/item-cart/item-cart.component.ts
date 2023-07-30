import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss'],
})
export class ItemCartComponent {
  @Input()
  item!: Item;
  carts: Item[] = [];
  ruSure = 'Bạn có chắc không?';

  constructor(protected dataService: DataService) {}

  addToCart() {
    let index = this.dataService.itemsCart.findIndex((cart) => {
      return cart.id == this.item.id;
    });

    if (this.item.inStock <= 0) {
      alert('Xin lỗi! Đã hết hàng.');
    } else {
      if (index === -1) {
        this.item.quantity = 1;
        this.item.inStock -= 1;

        this.dataService.addToCart(this.item);
      } else {
        this.item.inStock -= 1;
        this.dataService.moreItemToCart(index);
      }
    }
  }

  reduceFromCart() {
    let index = this.dataService.itemsCart.findIndex((cart) => {
      return cart.id == this.item.id;
    });

    this.dataService.reduceItemInCart(index);
  }

  removeFromCart() {
    if (confirm(this.ruSure) == true) {
      let index = this.dataService.itemsCart.findIndex((cart) => {
        return cart.id == this.item.id;
      });
      if (index !== -1) {
        this.dataService.removeFromCart(index);
        alert('Đã xóa món hàng khỏi giỏ.');
      }
    }
  }
}
