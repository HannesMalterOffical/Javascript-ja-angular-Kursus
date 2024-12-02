import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Toode } from '../../models/Toode';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  tooted: Toode[] = [];
  lisatavTooteNimi = "";
  lisatavTooteHind = 0;
  lisatavTooteAktiivne = false;
  lisatavTootePilt = "";
  sonum = "";

  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    this.tooted = this.productservice.tooted
  }

  lisaToode(){
    if(this.lisatavTooteNimi === "") {
      this.sonum = "Tuhja nimetusega ei saa toodet lisada!"
      return; // ara siit edasi mine
    }
    if(this.lisatavTooteNimi[0].toLowerCase() === this.lisatavTooteNimi[0]) {
      this.sonum = "Toodet ei saa lisada vaikse algus tahega!"
      return; // ara siit edasi mine
    }
    if(this.lisatavTooteNimi.includes("#") || this.lisatavTooteNimi.includes("{") 
      || this.lisatavTooteNimi.includes("!") || this.lisatavTooteNimi.includes("¤")
    ){
      this.sonum = "Toote siise ei saa lisada spetsiaalseid markme"
      return; // ara siit edasi mine
    }
    // if(this.tooted.includes(this.lisatavToode)) {
    //   this.sonum = "Toodet on juba lisatud"
    //   return; 
    // }
    
    this.tooted.push({
      nimi: this.lisatavTooteNimi, 
      hind: this.lisatavTooteHind, 
      aktiivne: this.lisatavTooteAktiivne, 
      pilt: this.lisatavTootePilt
    });
    this.lisatavTooteNimi = "";
    this.lisatavTooteHind = 0;
    this.lisatavTooteAktiivne = false;
    this.lisatavTootePilt = "";
    this.sonum = "Toode lisatud!";
  }
}
