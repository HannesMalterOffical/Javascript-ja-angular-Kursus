import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  tooted = ["Nobe", "BMW", "Tesla", "Volvo", "Saab", "Bently", "Nissan", "Toyota"];

  esindused = ["Kristiine", "Ülemiste", "Rocca al mare", "Vesse", "Järveotsa", "Mustamäe", "Viru keskus", "Solaris"];
  
  tootajad = ["Susanna G.", "Timmu", "Onu Aadu", "Joosep F.", "Daniel", "Peeter O. S. Tavamaa", "Tanel P. A.", "Renet O."]


  constructor() { }
}
