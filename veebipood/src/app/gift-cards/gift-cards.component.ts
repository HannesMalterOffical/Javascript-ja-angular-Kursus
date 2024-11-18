import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gift-cards',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gift-cards.component.html',
  styleUrl: './gift-cards.component.css'
})
export class GiftCardsComponent {
  sum = 20;
  inputShown = false;
  inputSum!: number;
  message = "";
  quantity = 1;

  receiverInfoShown = false;

  gifterName = "";
  receiverName = "";
  receiverEmail = "";

  decreaseQauntity() {
    this.quantity--;
  }

  increaseQauntity(){
    this.quantity++;
  }

  changeSum(sum: number){
    if (sum < 15) {
      this.sum = 15;
      this.inputSum = 15;
      this.message = "Kinkekaardi summa peab olema vahemikus 15 kuni 2000 eurot"
      this.inputShown = false;
      return;
    }
    if (sum > 2000) {
      this.sum = 2000;
      this.inputSum = 2000;
      this.message = "Kinkekaardi summa peab olema vahemikus 15 kuni 2000 eurot"
      this.inputShown = false;
      return;
    }
    this.message = "";
    this.sum = sum;
    this.inputShown = false;
    if (sum === 20 || sum === 50 || sum === 100) {
      this.inputSum = 0;
    }
  }

  addToCart() {
    console.log(this.gifterName);
    console.log(this.receiverName);
    console.log(this.receiverEmail);
  }

  showInput() {
    this.inputShown = true;
  }
}
