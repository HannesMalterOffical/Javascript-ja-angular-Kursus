import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-esindused',
  standalone: true,
  imports: [],
  templateUrl: './esindused.component.html',
  styleUrl: './esindused.component.css'
})
export class EsindusedComponent implements OnInit {
  esindused: string[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit() {                              // kustutab ara malukoha
    this.esindused = this.productService.esindused.slice(); 
    
  }

  SorteeriAZ() {
    this.esindused.sort((a, b) => a.localeCompare(b))
  }

  SorteeriZA() {
    this.esindused.sort((a, b) => b.localeCompare(a))
  }

  SorteeriTahedKasv() {
    this.esindused.sort((a, b) => a.length - b.length)
  }

  SorteeriTahedKah() {
    this.esindused.sort((a, b) => b.length - a.length)
  }

  SorteeriNeljasTahtAZ() {      // Bently 012
    this.esindused.sort((a, b) => a[3].localeCompare(b[3]))
  }

  SorteeriSonadArvuJargi() {
    this.esindused.sort((a, b) => (b.split(" ").length - a.split(" ").length));
  }

  

  //FILTER

  filtreeriKesLoppevadTahegaE() {
    this.esindused = this.esindused.filter(esindus => esindus.endsWith("e"));
  }

  filtreeriTapselt7Tahelised() {
    this.esindused = this.esindused.filter(esindus => esindus.length === 7);
  }

  filtreeriKuniVoiTapselt9Tahelised() {
    this.esindused = this.esindused.filter(esindus => esindus.length <= 9);
  }

  filtreeriKesKellelLuhendIs() {
    this.esindused = this.esindused.filter(esindus => esindus.toLowerCase().includes("is"));
  }

  filtreeriNeljasTahtS() {
    this.esindused = this.esindused.filter(esindus => esindus[3] === "s");
  }

  filtreeriPaarisarvTahtiSisaldavad() {
    this.esindused = this.esindused.filter(esinuds => /(.)\1/.test(esinuds));
  }
}

