import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Toode } from '../models/Toode';
import { OstukorviToode } from '../models/OstukorviToode';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: OstukorviToode[] = [];

  constructor(private cartService: CartService) {
    console.log("1. logimine constructorist - failide uhendamiseks");
  }

  ngOnInit(): void {
    this.products = this.cartService.getCart(); 
    console.log("2. logimine ngOinitist - muutujatele vaartusste andmiseks");  
    console.log("3. HTML"); 
  }

  tuhjenda() {
    this.cartService.emptyCart();
  }

  decreaseKogus(ostukorviToode: OstukorviToode) {
    this.cartService.decreaseQuantity(ostukorviToode);
  }

  increaseKogus(ostukorviToode: OstukorviToode) {
    this.cartService.increaseQuantity(ostukorviToode);
  }

  kustuta(i: number) {
    this.cartService.removeFromCart(i); // kustutamiseks
  }

  arvutaKokku() {
    return this.cartService.calculateSumOfCart();
  }
}
