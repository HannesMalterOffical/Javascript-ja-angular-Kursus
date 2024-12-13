import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Toode } from '../models/Toode';

@Component({
  selector: 'app-uks-toode',
  standalone: true,
  imports: [],
  templateUrl: './uks-toode.component.html',
  styleUrl: './uks-toode.component.css'
})
export class UksToodeComponent implements OnInit {
  toode!: Toode;

  constructor(private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {           // peab uhtima sellega mis on URLis :taga
    const tooteNimi = this.route.snapshot.paramMap.get("nimi");
    if (tooteNimi !== null) {
      const leitud = this.productService.tooted.find(t => t.nimi === tooteNimi);
      if (leitud !== undefined) {
        this.toode = leitud;
      }
    }
  }
}
