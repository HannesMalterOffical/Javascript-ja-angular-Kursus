import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Toode } from '../../models/Toode';

@Component({
  selector: 'app-maintain-products',
  standalone: true,
  imports: [],
  templateUrl: './maintain-products.component.html',
  styleUrl: './maintain-products.component.css'
})                                    // kontrolli eesmargil, et ngOnInit ei muutuks/kaoks
export class MaintainProductsComponent implements OnInit {
  tooted: Toode[] = [];
  esindused: string[] = [];
  // Constructor seob erinevaid faile
  constructor(private productService: ProductService) {}

  // ngOnInit kaimaminemise funktsioon ehk kui siia lehele satutakse
  ngOnInit() {
    this.tooted = this.productService.tooted;
    this.esindused = this.productService.esindused;
  }

  arvutaKokku() {
    let summa = 0;
    this.tooted.forEach(toode => {
      // summa = summa + toode.nimi.length;
      summa += toode.nimi.length;
    });
    return summa;
  }

  kustuta(index: number) {
    this.productService.tooted.splice(index, 1);
  }
}
