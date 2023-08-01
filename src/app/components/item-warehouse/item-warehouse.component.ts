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
  changePrice: FormControl<number | null> = new FormControl(0);
  changeName: FormControl<string | null> = new FormControl('');
  changePicURL: FormControl<string | null> = new FormControl('');
  changeDescription: FormControl<string | null> = new FormControl('');
  ruSure = 'Bạn có chắc không?';

  constructor(public dataService: DataService) {
    this.addForm.addControl('addStock', this.addStock);
    this.addForm.addControl('changePrice', this.changePrice);
    this.addForm.addControl('changeName', this.changeName);
    this.addForm.addControl('changePicURL', this.changePicURL);
    this.addForm.addControl('changeDescription', this.changeDescription);
  }

  updateName() {
    if (this.changeName.value == null) {
      alert('Hãy nhập dữ liệu vô trước.');
    } else {
      let index = this.dataService.listItem.findIndex((list) => {
        return list.id == this.item.id;
      });

      if (confirm(this.ruSure) == true) {
        if (index === -1) {
          alert('Không tìm thấy hàng.');
        } else {
          this.dataService.listItem[index].name = this.changeName.value;
          this.dataService.updateOneData(this.dataService.listItem[index].id, {
            ...this.dataService.listItem[index],
          });
          alert('Cập nhật thành công.');
        }
      }
    }
  }

  updateDescription() {
    if (this.changeDescription.value == null) {
      alert('Hãy nhập dữ liệu vô trước.');
    } else {
      let index = this.dataService.listItem.findIndex((list) => {
        return list.id == this.item.id;
      });

      if (confirm(this.ruSure) == true) {
        if (index === -1) {
          alert('Không tìm thấy hàng.');
        } else {
          this.dataService.listItem[index].description =
            this.changeDescription.value;
          this.dataService.updateOneData(this.dataService.listItem[index].id, {
            ...this.dataService.listItem[index],
          });
          alert('Cập nhật thành công.');
        }
      }
    }
  }

  updateImage() {
    if (this.changePicURL.value == null) {
      alert('Hãy nhập dữ liệu vô trước.');
    } else {
      let index = this.dataService.listItem.findIndex((list) => {
        return list.id == this.item.id;
      });

      if (confirm(this.ruSure) == true) {
        if (index === -1) {
          alert('Không tìm thấy hàng.');
        } else {
          this.dataService.listItem[index].imgURL = this.changePicURL.value;
          this.dataService.updateOneData(this.dataService.listItem[index].id, {
            ...this.dataService.listItem[index],
          });
          alert('Cập nhật thành công.');
        }
      }
    }
  }

  updatePrice() {
    if (this.changePrice.value! <= 0) {
      alert('Hãy nhập dữ liệu vô trước.');
    } else {
      let index = this.dataService.listItem.findIndex((list) => {
        return list.id == this.item.id;
      });

      if (confirm(this.ruSure) == true) {
        if (index === -1) {
          alert('Không tìm thấy hàng.');
        } else {
          this.dataService.listItem[index].price = this.changePrice.value!;
          this.dataService.updateOneData(this.dataService.listItem[index].id, {
            ...this.dataService.listItem[index],
          });
          alert('Cập nhật thành công.');
        }
      }
    }
  }

  addInStock() {
    if (this.addStock.value! <= 0) {
      alert('Hãy nhập dữ liệu vô trước.');
    } else {
      let index = this.dataService.listItem.findIndex((list) => {
        return list.id == this.item.id;
      });

      if (confirm(this.ruSure) == true) {
        if (index === -1) {
          alert('Không tìm thấy hàng.');
        } else {
          this.dataService.listItem[index].inStock += this.addStock.value!;
          alert('Bổ sung thành công.');
          this.dataService.updateOneData(this.dataService.listItem[index].id, {
            ...this.dataService.listItem[index],
          });
        }
      }
    }
  }
}
