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
    if (this.item.inStock! <= 0) {
      alert('Xin lỗi! Đã hết hàng.');
    } else {
      let findItem = this.dataService.itemsCart.findIndex(
        (cartItem) => cartItem.id === this.item.id
      );
      if (findItem !== -1) {
        alert('Thành công bỏ vào giỏ hàng.');
        this.item.quantity += 1;
        this.item.inStock -= 1;

        this.dataService.updateOneCart(this.item.id, this.item);
      } else {
        this.item.quantity += 1;
        this.item.inStock -= 1;
        this.dataService.addCartCloud(this.item);
        alert('Thành công bỏ vào giỏ hàng.');
      }
    }
  }
}
