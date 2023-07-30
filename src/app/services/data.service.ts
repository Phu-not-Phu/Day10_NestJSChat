import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  // listItem: Item[] = [
  //   {
  //     id: '1',
  //     name: 'Atlas - Portal 2',
  //     price: 5880000,
  //     inStock: 10,
  //     description:
  //       'Nhân vật: Atlas Series: Portal Tỷ lệ: non-scale Kích thước: 12.5cm Phát hành: 11/2017',
  //     imgURL:
  //       'https://product.hstatic.net/1000160337/product/good_smile_company_atlas__2__master.jpg',
  //     quantity: 0,
  //   },
  //   {
  //     id: '2',
  //     name: 'P-Body - Portal 2',
  //     price: 5380000,
  //     inStock: 20,
  //     description:
  //       'Nhân vật: P-Body Series: Portal 2 Kích thước: 140mm Hãng sx: Good Smile Company Phát hành: 11/2017',
  //     imgURL:
  //       'https://product.hstatic.net/1000160337/product/figure-030087_01_master.jpg',
  //     quantity: 0,
  //   },
  //   {
  //     id: '3',
  //     name: 'Hells Paradise: Jigokuraku Gabimaru',
  //     price: 6520000,
  //     inStock: 15,
  //     description:
  //       'Nhân vật: Gabimaru Series: Hells Paradise: Jigokuraku Tỷ lệ: 1/7 Hãng sản xuất: MAPPA thước: 20cm Phát hành: 6/2024',
  //     imgURL:
  //       'https://product.hstatic.net/1000160337/product/hell_s_paradise_jigokuraku_gabimaru_1__5__6cccc247e04e42398eee40fb3b84bf17_master.jpg',
  //     quantity: 0,
  //   },
  //   {
  //     id: '4',
  //     name: 'Hells Paradise: Jigokuraku Yuzuriha',
  //     price: 7500000,
  //     inStock: 15,
  //     description:
  //       'Nhân vật: Yuzuriha Series: Hells Paradise: Jigokuraku Tỷ lệ: 1/7 Hãng sản xuất: MAPPA Kích thước: 22.5cm Phát hành: 4/2024',
  //     imgURL:
  //       'https://product.hstatic.net/200000041202/product/3569743_332b68150f6f460c95f1d4ea666c8aea.jpeg',
  //     quantity: 0,
  //   },
  //   {
  //     id: '5',
  //     name: 'JJBA P.1 Jonathan Joestar',
  //     price: 2850000,
  //     inStock: 5,
  //     description:
  //       'Super Action Statue Nhân vật: Jonathan Joestar Series: JoJos Bizarre Adventure Part.1 Hãng sản xuất: Medicos Entertainment Kích thước: 17cm Phát hành: 4/2024',
  //     imgURL:
  //       'https://product.hstatic.net/1000160337/product/per_action_statue_jojo_s_bizarre_adventure_part.1_jonathan_joestar__1__150b0d14dca64259a59b1996e0e0ab66_master.jpg',
  //     quantity: 0,
  //   },
  //   {
  //     id: '6',
  //     name: 'JJBA P.1 Dio Brando',
  //     price: 2850000,
  //     inStock: 10,
  //     description:
  //       'Super Action Statue Nhân vật: Dio Brando Series: JoJos Bizarre Adventure Part.1 Hãng sản xuất: Medicos Entertainment Kích thước: 17cm Phát hành: 4/2024',
  //     imgURL:
  //       'https://product.hstatic.net/1000160337/product/super_action_statue_jojo_s_bizarre_adventure_part.1_dio_brando__5__1ea524b1c9994699895e57beb681824d_master.jpg',
  //     quantity: 0,
  //   },
  //   {
  //     id: '7',
  //     name: 'JJBA P.5 Moody Blue',
  //     price: 2380000,
  //     inStock: 5,
  //     description:
  //       'Super Action Statue Nhân vật: M.B Series: JoJos Bizarre Adventure Part.5 Hãng sản xuất: Medicos Entertainment Kích thước: 16cm Phát hành: 8/2021',
  //     imgURL:
  //       'https://product.hstatic.net/1000160337/product/super_action_statue_jojo_s_bizarre_adventure_part.5_m__2__ac0d5533878c44cda6b6a903ca4b51e0_master.jpg',
  //     quantity: 0,
  //   },
  //   {
  //     id: '8',
  //     name: 'JJBA P.5 Sticky Finger',
  //     price: 2200000,
  //     inStock: 5,
  //     description:
  //       'Super Action Statue Nhân vật: S.F Series: JoJos Bizarre Adventure Part.5 Hãng sản xuất: Medicos Entertainment Kích thước: 16cm Phát hành: 8/2021',
  //     imgURL:
  //       'https://product.hstatic.net/1000160337/product/figure-044937_02_4cbbb099ec0d449aa6cf1fe6c68fcd2a_master.jpg',
  //     quantity: 0,
  //   },
  // ];

  listItem: Item[] = this.loadLocalStock();
  itemsCart: Item[] = this.loadLocalCart();

  addItem(newItem: Item) {
    this.listItem.push(newItem);
    this.saveLocal();
  }

  addToCart(newItem: Item) {
    this.itemsCart.push(newItem);
    this.saveLocal();
  }

  moreItemToCart(index: any) {
    this.itemsCart[index].quantity += 1;
    this.saveLocal();
  }

  reduceItemInCart(index: any) {
    if (this.itemsCart[index].quantity > 0) {
      this.itemsCart[index].quantity -= 1;
      this.itemsCart[index].inStock += 1;
      this.saveLocal();
    }
  }

  removeFromCart(index: any) {
    this.restoreOneItem(index);
    this.itemsCart.splice(index, 1);
    this.saveLocal();
  }

  removeFromWarehouse(indexList: any, indexCart: any) {
    this.listItem.splice(indexList, 1);
    this.itemsCart.splice(indexCart, 1);
    this.saveLocal();
  }

  restoreOneItem(index: any) {
    for (let j = 0; j < this.listItem.length; j++) {
      if (this.listItem[j].id === this.itemsCart[index].id) {
        this.listItem[j].inStock += this.itemsCart[index].quantity;
        this.saveLocal();
      }
    }
  }

  restoreAllItem() {
    for (let i = 0; i < this.itemsCart.length; i++) {
      for (let j = 0; j < this.listItem.length; j++) {
        if (this.listItem[j].id === this.itemsCart[i].id) {
          this.listItem[j].inStock += this.itemsCart[i].quantity;
          this.listItem[j].quantity = 0;
          this.saveLocal();
        }
      }
    }
  }

  emptyCart() {
    this.itemsCart = [];
    this.saveLocal();
  }

  saveLocal() {
    localStorage.setItem('listItem', JSON.stringify(this.listItem));
    localStorage.setItem('itemsCart', JSON.stringify(this.itemsCart));
  }

  loadLocalStock() {
    this.listItem = [];
    let listItem = localStorage.getItem('listItem');
    if (listItem) {
      return JSON.parse(listItem!);
    } else {
      return [];
    }
  }

  loadLocalCart() {
    this.itemsCart = [];
    let itemsCart = localStorage.getItem('itemsCart');
    if (itemsCart) {
      return JSON.parse(itemsCart!);
    } else {
      return [];
    }
  }
}
