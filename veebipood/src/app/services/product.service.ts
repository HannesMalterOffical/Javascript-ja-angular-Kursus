import { Injectable } from '@angular/core';
import { Toode } from '../models/Toode';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  tooted: Toode[] = [
    {nimi: 'Nobe', hind: 25000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'BMW', hind: 34000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Tesla', hind: 70000, aktiivne: false, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Volvo', hind: 29000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Saab', hind: 38000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Bently', hind: 44000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Nissan', hind: 67000, aktiivne: false, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Toyota', hind: 21000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
  ];

  // Nimi:, Tel, aadress
  // Model teha
  // Kus neid valja kuvan ---> Aadresii tahemarkide kokkuarvutus
  esindused = [
    'Kristiine',
    'Ülemiste',
    'Rocca al mare',
    'Vesse',
    'Järveotsa',
    'Mustamäe',
    'Viru keskus',
    'Solaris',
  ];

  // Tootajad: nimi, ametikoht, tel
  // Model teha
  // Kus neid valja kuvan ---> Aadresii tahemarkide kokkuarvutus
  tootajad = [
    'Susanna G.',
    'Timmu',
    'Onu Aadu',
    'Joosep F.',
    'Daniel',
    'Peeter O. S. Tavamaa',
    'Tanel P. A.',
    'Renet O.',
  ];

  constructor() {}
}
