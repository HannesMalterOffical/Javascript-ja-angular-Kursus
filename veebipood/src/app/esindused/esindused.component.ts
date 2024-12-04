import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Esindus } from '../models/Esindus';

@Component({
  selector: 'app-esindused',
  standalone: true,
  imports: [],
  templateUrl: './esindused.component.html',
  styleUrl: './esindused.component.css'
})
export class EsindusedComponent implements OnInit {
  esindused: Esindus[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit() {                              // kustutab ara malukoha
    this.esindused = this.productService.esindused.slice(); 
    
  }

  SorteeriAZ() {
    this.esindused.sort((a, b) => a.nimi.localeCompare(b.nimi))
  }

  SorteeriZA() {
    this.esindused.sort((a, b) => b.nimi.localeCompare(a.nimi))
  }

  SorteeriTahedKasv() {
    this.esindused.sort((a, b) => a.nimi.length - b.nimi.length)
  }

  SorteeriTahedKah() {
    this.esindused.sort((a, b) => b.nimi.length - a.nimi.length)
  }

  SorteeriNeljasTahtAZ() {      // Bently 012
    this.esindused.sort((a, b) => a.nimi[3].localeCompare(b.nimi[3]))
  }

  SorteeriSonadArvuJargi() {
    this.esindused.sort((a, b) => (b.nimi.split(" ").length - a.nimi.split(" ").length));
  }

  

  //FILTER

  filtreeriKesLoppevadTahegaE() {
    this.esindused = this.esindused.filter(esindus => esindus.nimi.endsWith("e"));
  }

  filtreeriTapselt7Tahelised() {
    this.esindused = this.esindused.filter(esindus => esindus.nimi.length === 7);
  }

  filtreeriKuniVoiTapselt9Tahelised() {
    this.esindused = this.esindused.filter(esindus => esindus.nimi.length <= 9);
  }

  filtreeriKesKellelLuhendIs() {
    this.esindused = this.esindused.filter(esindus => esindus.nimi.toLowerCase().includes("is"));
  }

  filtreeriNeljasTahtS() {
    this.esindused = this.esindused.filter(esindus => esindus.nimi[3] === "s");
  }

  filtreeriPaarisarvTahtiSisaldavad() {
    this.esindused = this.esindused.filter(esinuds => /(.)\1/.test(esinuds.nimi));
  }
}

