import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-item-warehouse',
  templateUrl: './item-warehouse.component.html',
  styleUrls: ['./item-warehouse.component.scss'],
})
export class ItemWarehouseComponent {
  @Input()
  item!: Item;
  listItem: Item[] = [];
  addForm: FormGroup = new FormGroup({});
  addStock: FormControl<number | null> = new FormControl(0);
  ruSure = 'Bạn có chắc không?';

  constructor(protected dataService: DataService) {
    this.listItem = this.dataService.listItem;
    this.addForm.addControl('addStock', this.addStock);
  }

  reStock() {
    if (this.addStock.value! <= 0) {
      alert('Hãy nhập số lượng vô trước.');
    } else {
      let index = this.dataService.listItem.findIndex((list) => {
        return list.id == this.item.id;
      });

      if (index === -1) {
        alert('Không tìm thấy hàng.');
      } else {
        this.dataService.listItem[index].inStock += this.addStock.value!;
        alert('Bổ sung thành công.');
        this.dataService.saveLocal();
      }
    }
  }

  removeItem(){
    if (confirm(this.ruSure) == true) {
      let indexList = this.dataService.listItem.findIndex((list) => {
        return list.id == this.item.id;
      });
      let indexCart = this.dataService.itemsCart.findIndex((cart) => {
        return cart.id == this.item.id;
      });

      if (indexList !== -1 || indexCart !== -1) {
        this.dataService.removeFromWarehouse(indexList, indexCart);
        alert('Đã xóa món hàng khỏi kho.');
      }
    }
  }
}
