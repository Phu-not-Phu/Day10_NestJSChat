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
  ruSure = 'Bạn có chắc không?';

  constructor(public dataService: DataService) {}

  moreToCart() {
    if (this.item.inStock <= 0) {
      alert('Xin lỗi! Đã hết hàng.');
    } else {
      this.item.quantity++;
      this.item.inStock--;

      this.dataService.updateOneCart(this.item.id, this.item);
    }
  }

  reduceFromCart() {
    if (this.item.quantity > 0) {
      this.item.quantity--;
      this.item.inStock++;

      this.dataService.updateOneCart(this.item.id, this.item);
    }
  }

  removeFromCart() {
    this.item.quantity = 0;
    this.dataService.deleteOneCart(this.item.id);
  }
}
