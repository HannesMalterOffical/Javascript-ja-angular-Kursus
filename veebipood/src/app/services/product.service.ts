import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  tooted = ["Nobe", "BMW", "Tesla", "Volvo", "Saab", "Bently", "Nissan", "Toyota"];
  
  constructor() { }
}
