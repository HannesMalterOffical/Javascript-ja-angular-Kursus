import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Tootaja } from '../models/Tootaja';

@Component({
  selector: 'app-tootajad',
  standalone: true,
  imports: [],
  templateUrl: './tootajad.component.html',
  styleUrl: './tootajad.component.css'
})
export class TootajadComponent implements OnInit {
  tootajad: Tootaja[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit() {
      this.tootajad = this.productService.tootajad.slice();
  }
    SorteeriAZ() {
    this.tootajad.sort((a, b) => a.nimi.localeCompare(b.nimi))
  }

  SorteeriZA() {
    this.tootajad.sort((a, b) => b.nimi.localeCompare(a.nimi))
  }

  SorteeriTahedKasv() {
    this.tootajad.sort((a, b) => a.nimi.length - b.nimi.length)
  }

  SorteeriTahedKah() {
    this.tootajad.sort((a, b) => b.nimi.length - a.nimi.length)
  }

  SorteeriNeljasTahtAZ() {      // Bently 012
    this.tootajad.sort((a, b) => a.nimi[3].localeCompare(b.nimi[3]))
  }

  SorteeriSonadArvuJargi() {
    this.tootajad.sort((a, b) => (b.nimi.split(" ").length - a.nimi.split(" ").length));
  }


  //FILTER

  filtreeriKesLoppevadTahegaL() {
    this.tootajad = this.tootajad.filter(tootaja => tootaja.nimi.endsWith("l"));
  }

  filtreeriTapselt5Tahelised() {
    this.tootajad = this.tootajad.filter(tootaja => tootaja.nimi.length === 5);
  }

  filtreeriKuniVoiTapselt8Tahelised() {
    this.tootajad = this.tootajad.filter(tootaja => tootaja.nimi.length <= 7);
  }

  filtreeriKesKellelLuhendAn() {
    this.tootajad = this.tootajad.filter(tootaja => tootaja.nimi.toLowerCase().includes("an"));
  }

  filtreeriKolmasTahtN() {
    this.tootajad = this.tootajad.filter(tootaja => tootaja.nimi[2] === "n");
  }

  filtreeriPaarisarvTahtiSisaldavad() {
    this.tootajad = this.tootajad.filter(tootaja => /(.)\1/.test(tootaja.nimi));
  }
}


