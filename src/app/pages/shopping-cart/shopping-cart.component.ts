import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  ruSure = 'Bạn có chắc không?';
  listItem: Item[] = this.dataServices.itemsCart;

  constructor(public dataServices: DataService) {}

  keuMua(){
    alert("Hãy mua hàng của chúng tôi :D !!!!");
  }

  tinhTong(): number {
    let total = 0;
    for (let i = 0; i < this.dataServices.itemsCart.length; i++) {
      total +=
        this.dataServices.itemsCart[i].quantity *
        this.dataServices.itemsCart[i].price;
    }
    return total;
  }

  thanhToan() {
    if (this.dataServices.itemsCart.length == 0 || this.listItem.length == 0) {
      alert('Không có gì để thanh toán.');
    } else {
      if (confirm(this.ruSure) == true) {
        for (let i = 0; i < this.listItem.length; i++) {
          this.listItem[i].quantity = 0;
          this.dataServices.updateOneData(this.listItem[i].id, this.listItem[i]);
          this.dataServices.deleteAllCart(this.listItem[i].id);
        }
        alert('Thanh toán thành công! Cảm ơn bạn đã mua hàng.');
      }
    }
  }

  xoaHet() {
    if (this.dataServices.itemsCart.length == 0) {
      alert('Không có gì để xóa');
    } else {
      if (confirm(this.ruSure) == true) {
        for (let i = 0; i < this.listItem.length; i++) {
          this.dataServices.deleteAllCart(this.listItem[i].id);
        }

        window.alert('Tất cả hàng trong giỏ đều được xóa thành công!');
      }
    }
  }
}
