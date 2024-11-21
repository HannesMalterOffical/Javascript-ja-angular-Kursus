import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // kooloniga maara tuupi, vordusmargiga annan vaartust
  tooted: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {                              // kustutab ara malukoha
    this.tooted = this.productService.tooted.slice(); 
    
  }

  SorteeriAZ() {
    this.tooted.sort((a, b) => a.localeCompare(b))
  }

  SorteeriZA() {
    this.tooted.sort((a, b) => b.localeCompare(a))
  }

  SorteeriTahedKasv() {
    this.tooted.sort((a, b) => a.length - b.length)
  }

  SorteeriTahedKah() {
    this.tooted.sort((a, b) => b.length - a.length)
  }

  SorteeriKolmasTahtAZ() {      // Bently 012
    this.tooted.sort((a, b) => a[2].localeCompare(b[2]))
  }

  //FILTER

  filtreeriKesLoppevadTahegaA() {
    this.tooted = this.tooted.filter(toode => toode.endsWith("a"));
  }

  filtreeriTapselt5Tahelised() {
    this.tooted = this.tooted.filter(toode => toode.length === 5);
  }

  filtreeriKuniVoiTapselt6Tahelised() {
    this.tooted = this.tooted.filter(toode => toode.length <= 6);
  }

  filtreeriKesKellelLuhendBE() {
    this.tooted = this.tooted.filter(toode => toode.toLowerCase().includes("be"));
  }

  filtreeriKolmasTahtS() {
    this.tooted = this.tooted.filter(toode => toode[2] === "s");
  }
}
