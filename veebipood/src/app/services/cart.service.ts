import { Injectable } from '@angular/core';
import { Toode } from '../models/Toode';
import { OstukorviToode } from '../models/OstukorviToode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: OstukorviToode[] = JSON.parse(localStorage.getItem('cart') || "[]");
  sumSubject = new BehaviorSubject(this.calculateSumOfCart());
  // subject ----> koodi kaivitamiseks teistes componentides. globaalsete muutujate tegemiseks
  //               koodi kaivitamisseks kui HTML on koguaeg nahtav, aga, kuskil, teises componendis
  //               kaivitatakse mingi kood (see tahendab, et ngOninit ei kaivitu ja update ie toimu)

  constructor() { }

  calculateSumOfCart() {
    let summa = 0;
    this.cart.forEach(ostukorviToode => {
      summa += ostukorviToode.toode.hind * ostukorviToode.kogus;
    });
    return summa;
  }
  getCart() {
    return this.cart;
  }

  addToCart(toode: Toode) {
    const leitud = this.cart.find(ostukorviToode => ostukorviToode.toode.nimi === toode.nimi)
    if (leitud !== undefined) { // kui on ostukorvis, siis suurendan kogust
      leitud.kogus++;  
      // leitud.kogus = leitud.kogus + 1;
      // leitud.kogus += 1; 
    } else { // kui pole ostukorvis, siis lisa loppu juurde push
      const ostukorviToode = {"toode": toode, "kogus": 1}
      this.cart.push(ostukorviToode);  
    }
    this.sumSubject.next(this.calculateSumOfCart());
    // this.sum = this sum = toode.hind
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

  decreaseQuantity(ostukorviToode: OstukorviToode) { 
    ostukorviToode.kogus--;
    if (ostukorviToode.kogus === 0) {
      const i = this.cart.indexOf(ostukorviToode);
      this.removeFromCart(i);
    }
    this.sumSubject.next(this.calculateSumOfCart());
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  increaseQuantity(ostukorviToode: OstukorviToode) {
    ostukorviToode.kogus++;
    this.sumSubject.next(this.calculateSumOfCart());
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
