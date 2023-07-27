import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input()
  item!: Item;
  itemInCart: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  addToCart(product: Item) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
