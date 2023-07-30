import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-myForm',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public myForm: FormGroup = new FormGroup({});
  name: FormControl<string | null> = new FormControl('');
  price: FormControl<number | null> = new FormControl(0);
  inStock: FormControl<number | null> = new FormControl(0);
  description: FormControl<string | null> = new FormControl('');
  imgURL: FormControl<string | null> = new FormControl('');

  constructor(protected dataService: DataService) {
    //FormControl để ngoài FormGroup
    this.myForm.addControl('name', this.name);
    this.myForm.addControl('price', this.price);
    this.myForm.addControl('inStock', this.inStock);
    this.myForm.addControl('description', this.description);
    this.myForm.addControl('imgURL', this.imgURL);
  }

  submit() {
    if (
      this.name.value! == '' ||
      this.price.value! <= 0 ||
      this.inStock.value! <= 0 ||
      this.description.value! == '' ||
      this.imgURL.value! == ''
    ) {
      alert('Hãy nhập dữ liệu trước.');
    } else {
      let timestamp = Date.now().toString();

      let newItem: Item = {
        id: timestamp,
        name: this.name.value!,
        price: this.price.value!,
        inStock: this.inStock.value!,
        description: this.description.value!,
        imgURL: this.imgURL.value!,
        quantity: 0,
      };

      this.dataService.addItem(newItem);
      alert('Nhập dữ liệu thành công.');
    }
  }
}
