import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  listItem: Item[] = [];
  ruSure = 'Bạn có chắc không?';

  constructor(protected dataServices: DataService) {
    this.listItem = this.dataServices.itemsCart;
  }

  tinhTong(): number {
    let total = 0;
    for (let i = 0; i < this.listItem.length; i++) {
      total += this.listItem[i].quantity * this.listItem[i].price;
    }
    return total;
  }

  thanhToan() {
    if (this.dataServices.itemsCart.length == 0 || this.listItem.length == 0) {
      alert('Không có gì để thanh toán.');
    } else {
      if (confirm(this.ruSure) == true) {
        this.listItem = [];
        this.dataServices.emptyCart();
        alert('Thanh toán thành công! Cảm ơn bạn đã mua hàng.');
      }
    }
  }

  xoaHet() {
    if (this.dataServices.itemsCart.length == 0 || this.listItem.length == 0) {
      alert('Không có gì để thanh toán.');
    } else {
      if (confirm(this.ruSure) == true) {
        this.listItem = [];
        this.dataServices.restoreAllItem();
        this.dataServices.emptyCart();
        alert('Đã xóa hết hàng trong giỏ.');
      }
    }
  }
}
