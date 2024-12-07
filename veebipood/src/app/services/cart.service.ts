import { Injectable } from '@angular/core';
import { Toode } from '../models/Toode';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Toode[] = JSON.parse(localStorage.getItem('cart') || "[]");

  constructor() { }

  getCart() {
    return this.cart;
  }

  addToCart(toode: Toode) {
    this.cart.push(toode);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  emptyCart() {
    this.cart.splice(0);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

}
