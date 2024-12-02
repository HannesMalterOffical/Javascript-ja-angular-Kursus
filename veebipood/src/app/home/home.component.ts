import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Toode } from '../models/Toode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // kooloniga maara tuupi, vordusmargiga annan vaartust
  tooted: Toode[] = [];

  constructor(private productService: ProductService,
    private cartservice: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {                              // kustutab ara malukoha
    this.tooted = this.productService.tooted.slice(); 
    
  }

  SorteeriAZ() {
    this.tooted.sort((a, b) => a.nimi.localeCompare(b.nimi))
  }

  SorteeriZA() {
    this.tooted.sort((a, b) => b.nimi.localeCompare(a.nimi))
  }

  SorteeriTahedKasv() {
    this.tooted.sort((a, b) => a.nimi.length - b.nimi.length)
  }

  SorteeriTahedKah() {
    this.tooted.sort((a, b) => b.nimi.length - a.nimi.length)
  }

  SorteeriKolmasTahtAZ() {      // Bently 012
    this.tooted.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]))
  }

  //FILTER

  filtreeriKesLoppevadTahegaA() {
    this.tooted = this.tooted.filter(toode => toode.nimi.endsWith("a"));
  }

  filtreeriTapselt5Tahelised() {
    this.tooted = this.tooted.filter(toode => toode.nimi.length === 5);
  }

  filtreeriKuniVoiTapselt6Tahelised() {
    this.tooted = this.tooted.filter(toode => toode.nimi.length <= 6);
  }

  filtreeriKesKellelLuhendBE() {
    this.tooted = this.tooted.filter(toode => toode.nimi.toLowerCase().includes("be"));
  }

  filtreeriKolmasTahtS() {
    this.tooted = this.tooted.filter(toode => toode.nimi[2] === "s");
  }
                      //done: muuda any koht oige tuubi peale
  lisaOstuKorvi(toode: Toode) {
    this.cartservice.cart.push(toode);
    this.toastr.success('Toode lisatud!', toode.nimi);
  }
}
