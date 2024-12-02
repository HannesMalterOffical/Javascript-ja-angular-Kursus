import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Toode } from '../models/Toode';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: Toode[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.cart;    
  }

  tuhjenda() {
    this.products = [];
  }

  kustuta(i: number) {
    this.products.splice(i, 1); // kustutamiseks
  }

  arvutaKokku() {
    let summa = 0;
    this.products.forEach(toode => {
      summa += toode.hind;
    });
    return summa;
  }
}
