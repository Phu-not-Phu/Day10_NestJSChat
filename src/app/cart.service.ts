import { Injectable } from '@angular/core';
import { Item } from './models/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Item[] = [];
  constructor() {}
  addToCart(product: Item) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
