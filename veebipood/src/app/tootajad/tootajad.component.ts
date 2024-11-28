import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tootajad',
  standalone: true,
  imports: [],
  templateUrl: './tootajad.component.html',
  styleUrl: './tootajad.component.css'
})
export class TootajadComponent implements OnInit {
  tootajad: string[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit() {
      this.tootajad = this.productService.tootajad.slice();
  }
    SorteeriAZ() {
    this.tootajad.sort((a, b) => a.localeCompare(b))
  }

  SorteeriZA() {
    this.tootajad.sort((a, b) => b.localeCompare(a))
  }

  SorteeriTahedKasv() {
    this.tootajad.sort((a, b) => a.length - b.length)
  }

  SorteeriTahedKah() {
    this.tootajad.sort((a, b) => b.length - a.length)
  }

  SorteeriNeljasTahtAZ() {      // Bently 012
    this.tootajad.sort((a, b) => a[3].localeCompare(b[3]))
  }

  SorteeriSonadArvuJargi() {
    this.tootajad.sort((a, b) => (b.split(" ").length - a.split(" ").length));
  }


  //FILTER

  filtreeriKesLoppevadTahegaL() {
    this.tootajad = this.tootajad.filter(tootaja => tootaja.endsWith("l"));
  }

  filtreeriTapselt5Tahelised() {
    this.tootajad = this.tootajad.filter(tootaja => tootaja.length === 5);
  }

  filtreeriKuniVoiTapselt8Tahelised() {
    this.tootajad = this.tootajad.filter(tootaja => tootaja.length <= 7);
  }

  filtreeriKesKellelLuhendAn() {
    this.tootajad = this.tootajad.filter(tootaja => tootaja.toLowerCase().includes("an"));
  }

  filtreeriKolmasTahtN() {
    this.tootajad = this.tootajad.filter(tootaja => tootaja[2] === "n");
  }

  filtreeriPaarisarvTahtiSisaldavad() {
    this.tootajad = this.tootajad.filter(tootaja => /(.)\1/.test(tootaja));
  }
}


