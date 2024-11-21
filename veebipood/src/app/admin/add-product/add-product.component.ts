import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  tooted = ["Nobe", "BMW", "Volvo"];
  lisatavToode = "";
  sonum = "";

  lisaToode(){
    if(this.lisatavToode === "") {
      this.sonum = "Tuhja nimetusega ei saa toodet lisada!"
      return; // ara siit edasi mine
    }
    if(this.lisatavToode[0].toLowerCase() === this.lisatavToode[0]) {
      this.sonum = "Toodet ei saa lisada vaikse algus tahega!"
      return; // ara siit edasi mine
    }
    if(this.lisatavToode.includes("#") || this.lisatavToode.includes("{") 
      || this.lisatavToode.includes("!") || this.lisatavToode.includes("¤")
    ){
      this.sonum = "Toote siise ei saa lisada spetsiaalseid markme"
      return; // ara siit edasi mine
    }
    if(this.tooted.includes(this.lisatavToode)) {
      this.sonum = "Toodet on juba lisatud"
      return; 
    }
    
    this.tooted.push(this.lisatavToode);
    this.lisatavToode = "";
    this.sonum = "Toode lisatud!";
  }
}
